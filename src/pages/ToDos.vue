<template>
  <q-page class="q-pa-md">
    <div class="todo-app">
      <TaskInputs />
      <TodayTasks />
      <OtherTasks />
    </div>
  </q-page>
</template>

<script setup>
import TaskInputs from "../components/TaskInputs.vue";
import TodayTasks from "../components/TodayTasks.vue";
import OtherTasks from "../components/OtherTasks.vue";
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
