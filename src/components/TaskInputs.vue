<template>
  <div class="input-section">
    <q-input
      class="task-name__input text-blue"
      v-model="taskName"
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
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";
import { getRandomColor, sortByDate } from "../utils/utils";

const taskName = ref("");
const taskDescription = ref("");
const taskDate = ref("");
const taskInput = ref(null);
const emit = defineEmits(["task-added"]);

const addTask = () => {
  if (taskName.value && taskDate.value && taskDescription.value) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push({
      id: Date.now(),
      name: taskName.value,
      description: taskDescription.value,
      color: getRandomColor(),
      date: taskDate.value,
      completed: false,
    });
    localStorage.setItem("tasks", JSON.stringify(sortByDate(tasks)));
    taskName.value = "";
    taskDescription.value = "";
    taskDate.value = "";
    emit("task-added");
    window.dispatchEvent(new Event("task-added"));
  } else {
    alert("Будь ласка, заповніть всі поля!");
  }
};

onMounted(() => {
  if (taskInput.value) {
    taskInput.value.focus();
  }
});
</script>

<style scoped lang="scss">
.input-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #282828;
  border-radius: 25px;
  padding: 20px;
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
</style>
