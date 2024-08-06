<template>
  <q-page class="q-pa-md">
    <div class="todo-app">
      <div class="input-section">
        <q-input
          class="task-name__input text-blue"
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="New Task"
          ref="taskInput"
          autogrow
        />
        <q-input
          class="task-description__input"
          v-model="taskDescription"
          @keyup.enter="addTask"
          placeholder="Task Description"
          autogrow
        />
        <q-input
          v-model="taskDate"
          type="date"
          @keyup.native.enter="addTask"
          placeholder="Date"
          class="task-date__input"
        />
      </div>
      <div class="tasks">
        <div class="task-category">
          <q-item>
            <q-item-section class="item-section__container">
              <img
                class="item-section-checkbox__img"
                src="../assets/images/checkbox.png"
                alt="checkbox"
              />
              <span>Today Tasks</span>
            </q-item-section>
          </q-item>
          <q-list>
            <q-item v-for="task in todayTasks" :key="task.id" class="task-item"
              ><div
                class="task-color-bar"
                :style="{ backgroundColor: task.color }"
              ></div>
              <q-item-section>
                <div class="task">
                  <q-chip
                    class="q-chip__header"
                    :class="{ 'completed-task': task.completed }"
                    row
                    q-chip--colored
                    q-chip--outline
                    >{{ task.name }}</q-chip
                  >
                  <div
                    class="q-chip__content"
                    :class="{ 'completed-task': task.completed }"
                  >
                    {{ task.description }}
                  </div>
                </div>
              </q-item-section>
              <q-item-section side>
                <q-toggle
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                  v-model="task.completed"
                  @update:model-value="updateTaskStatus(task)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div
          class="task-category"
          v-for="category in otherCategories"
          :key="category.date"
        >
          <q-item>
            <q-item-section>
              <div class="category-title">
                <div class="category-color-bar"></div>
                <span>{{
                  category.date === tomorrowDateString
                    ? "Tomorrow Tasks"
                    : formatDate(category.date) + " Tasks"
                }}</span>
              </div>
            </q-item-section>
            <q-item-section side>
              <q-btn
                dense
                flat
                icon="keyboard_arrow_down"
                @click="toggleCategoryVisibility(category.date)"
              />
            </q-item-section>
          </q-item>
          <q-list v-if="visibleCategories[category.date]" class="task-list">
            <q-item
              v-for="task in category.tasks"
              :key="task.id"
              class="task-item"
              ><div
                class="task-color-bar"
                :style="{ backgroundColor: task.color }"
              ></div>
              <q-item-section>
                <div class="task">
                  <q-chip
                    class="q-chip__header"
                    :class="{ 'completed-task': task.completed }"
                    row
                    q-chip--colored
                    q-chip--outline
                    >{{ task.name }}</q-chip
                  >
                  <div
                    class="q-chip__content"
                    :class="{ 'completed-task': task.completed }"
                  >
                    {{ task.description }}
                  </div>
                </div>
              </q-item-section>
              <q-item-section side>
                <q-toggle
                  checked-icon="check"
                  color="green"
                  unchecked-icon="clear"
                  v-model="task.completed"
                  @update:model-value="updateTaskStatus(task)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const newTask = ref("");
const taskDescription = ref("");
const taskDate = ref("");
const visibleCategories = ref({
  today: true,
});

const tasks = ref(JSON.parse(localStorage.getItem("tasks") || "[]"));

const todayDate = new Date().toISOString().split("T")[0];
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrowDateString = tomorrowDate.toISOString().split("T")[0];

const todayTasks = computed(() =>
  tasks.value
    .filter((task) => task.date === todayDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
);

const otherCategories = computed(() => {
  const categories = [];
  const dates = [...new Set(tasks.value.map((task) => task.date))].filter(
    (date) => date !== todayDate && date !== tomorrowDateString
  );

  if (tasks.value.some((task) => task.date === tomorrowDateString)) {
    categories.push({
      date: tomorrowDateString,
      tasks: tasks.value
        .filter((task) => task.date === tomorrowDateString)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    });
  }

  dates.forEach((date) => {
    categories.push({
      date,
      tasks: tasks.value
        .filter((task) => task.date === date)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    });
    if (!visibleCategories.value[date]) {
      visibleCategories.value[date] = false;
    }
  });

  return categories;
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
    tasks.value.sort((a, b) => new Date(a.date) - new Date(b.date));
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  }
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const toggleCategoryVisibility = (category) => {
  visibleCategories.value[category] = !visibleCategories.value[category];
};

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}`;
};

const updateTaskStatus = (task) => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const taskInput = ref(null);
onMounted(() => {
  taskInput.value.focus();
});
</script>

<style scoped lang="scss">
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  background: #1d1d1d;
  padding: 20px;
  border-radius: 25px;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #282828;
  border-radius: 25px;
  padding: 20px;
  color: white;
  box-shadow: -3px -3px 10px rgba(255, 255, 255, 0.11);

  .task-name__input,
  .task-description__input,
  .task-date__input {
    border: 1px solid #ffffff;
    border-radius: 14px;
    padding: 2px 20px;
    background: radial-gradient(circle, #2eace7, #ffffff);
    font-size: 20px;
  }
}

.task-category {
  margin-top: 20px;
  background: #282828;
  border-radius: 25px;
  padding: 10px;
  color: white;
  text-align: left;
  box-shadow: -3px -3px 10px rgba(255, 255, 255, 0.144);

  .category-title {
    display: flex;
    align-items: center;

    .category-color-bar {
      width: 5px;
      height: 24px;
      background: #a9a9a9;
      margin-right: 10px;
      border-radius: 6px;
    }
  }
}

.task {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  text-align: left;

  .task-color-bar {
    width: 5px;
    height: 5em;
    margin-right: 10px;
    border-radius: 18px;
    margin-bottom: -10px;
  }

  .q-chip__header {
    background: transparent;
    font-size: 24px;
    border-radius: 15px;
    margin-bottom: 5px;
    color: #f4f4f4;
    text-align: left;
    padding: 0;
    margin-left: 0;
  }

  .q-chip__content {
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    opacity: 0.6;
  }
}

.task-list {
  background: #282828;
  border-radius: 25px;
  padding: 10px;
  color: white;
}

.task-item {
  margin-top: 10px;
  background: #282828;
  border-radius: 25px;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .task-color-bar {
    width: 5px;
    height: 5em;
    margin-right: 10px;
    border-radius: 18px;
    margin-bottom: -10px;
  }

  .q-chip__header {
    background: transparent;
    font-size: 24px;
    border-radius: 15px;
    margin-bottom: 5px;
    color: #f4f4f4;
    text-align: left;
    padding: 0;
    margin-left: 0;
  }

  .q-chip__content {
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    opacity: 0.6;
  }
}

.completed-task {
  text-decoration: line-through;
  opacity: 0.6;
}

.item-section__container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: start;
  align-items: center;
}

.q-item__section {
  font-size: 24px;
  font-weight: 600;
}
</style>
