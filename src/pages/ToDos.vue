<template>
  <q-page class="q-pa-md">
    <div class="todo-app">
      <TaskInputs
        :newTask="newTask"
        :taskDescription="taskDescription"
        :taskDate="taskDate"
        @update:newTask="newTask = $event"
        @update:taskDescription="taskDescription = $event"
        @update:taskDate="taskDate = $event"
        @addTask="addTask"
      />
      <TodayTasks :tasks="todayTasks" @updateTaskStatus="updateTaskStatus" />
      <OtherTasks
        :categories="otherCategories"
        :visibleCategories="visibleCategories"
        @toggleCategoryVisibility="toggleCategoryVisibility"
        @updateTaskStatus="updateTaskStatus"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import TaskInputs from "../components/TaskInputs.vue";
import TodayTasks from "../components/TodayTasks.vue";
import OtherTasks from "../components/OtherTasks.vue";
import { getRandomColor } from "../utils/utils";

const newTask = ref("");
const taskDescription = ref("");
const taskDate = ref("");
const visibleCategories = ref({ today: true });

const storedTaskList = JSON.parse(localStorage.getItem("tasks") || "[]");
const tasks = ref(storedTaskList);

const todayDate = new Date().toISOString().split("T")[0];

const sortByDate = (items) => {
  return items.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const getDateCategories = (tasks, dateCategory) => {
  return sortByDate(tasks.filter((task) => task.date === dateCategory));
};

const todayTasks = computed(() => getDateCategories(tasks.value, todayDate));

const addToCategory = (categories, task) => {
  if (!categories[task.date]) {
    categories[task.date] = {
      date: task.date,
      tasks: [],
    };
  }
  categories[task.date].tasks.push(task);
};

const otherCategories = computed(() => {
  const categories = tasks.value.reduce((acc, task) => {
    if (task.date !== todayDate) {
      addToCategory(acc, task);
    }
    return acc;
  }, {});

  return Object.values(categories).map((category) => ({
    ...category,
    tasks: sortByDate(category.tasks),
  }));
});

const addTask = () => {
  if (newTask.value && taskDate.value && taskDescription.value) {
    tasks.value.push({
      id: Date.now(),
      name: newTask.value,
      description: taskDescription.value,
      color: getRandomColor(),
      date: taskDate.value,
      completed: false,
    });
    newTask.value = "";
    taskDescription.value = "";
    taskDate.value = "";
    tasks.value = sortByDate(tasks.value);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  } else {
    alert("Будь ласка, заповніть всі поля!");
  }
};

const toggleCategoryVisibility = (category) => {
  visibleCategories.value[category] = !visibleCategories.value[category];
};

const updateTaskStatus = (task) => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

// const tasksBlockTitle = computed(() => (date) => {
//   return date === tomorrowDateString
//     ? "Tomorrow Tasks"
//     : `${formatDate(date)} Tasks`;
// });
</script>

<style scoped lang="scss">
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  background: #1d1d1d;
  padding: 20px;
  border-radius: 25px;
}
</style>
