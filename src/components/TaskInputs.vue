<template>
  <div class="input-section">
    <q-input
      class="task-name__input text-blue"
      v-model="taskName"
      @keyup.enter="handleEnter"
      placeholder="New Task"
      ref="taskInput"
      autogrow
    />
    <q-input
      class="task-description__input"
      v-model="taskDescription"
      @keyup.enter="handleEnter"
      placeholder="Task Description"
      autogrow
    />
    <q-input
      v-model="taskDate"
      type="date"
      @keyup.native.enter="handleEnter"
      placeholder="Date"
      class="task-date__input"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps, watch } from "vue";

const props = defineProps({
  newTask: String,
  taskDescription: String,
  taskDate: String,
});

const emit = defineEmits([
  "update:newTask",
  "update:taskDescription",
  "update:taskDate",
  "addTask",
]);

const taskName = ref(props.newTask);
const taskDescription = ref(props.taskDescription);
const taskDate = ref(props.taskDate);
const taskInput = ref(null);

const handleEnter = () => {
  emit("addTask");
};

watch(
  () => props.newTask,
  (newValue) => (taskName.value = newValue)
);
watch(
  () => props.taskDescription,
  (newValue) => (taskDescription.value = newValue)
);
watch(
  () => props.taskDate,
  (newValue) => (taskDate.value = newValue)
);

watch(taskName, (newValue) => emit("update:newTask", newValue));
watch(taskDescription, (newValue) => emit("update:taskDescription", newValue));
watch(taskDate, (newValue) => emit("update:taskDate", newValue));

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
