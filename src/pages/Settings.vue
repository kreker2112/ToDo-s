<template>
  <q-page class="q-pa-md">
    <div class="settings">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">Settings</div>
        </q-card-section>
        <q-card-section>
          <q-item>
            <q-item-section>Completed Tasks</q-item-section>
            <q-item-section>
              {{ completedTasks.length }}
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Pending Tasks</q-item-section>
            <q-item-section>
              {{ pendingTasks.length }}
            </q-item-section>
          </q-item>
          <router-link to="/" class="q-mt-md">
            <q-btn label="Back to ToDos" color="primary" />
          </router-link>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";

const storedTaskList = JSON.parse(localStorage.getItem("tasks"));
const tasks = storedTaskList || [];

const completedTasks = computed(() => tasks.filter((task) => task.completed));
const pendingTasks = computed(() => tasks.filter((task) => !task.completed));
</script>

<style scoped>
.settings {
  max-width: 400px;
  margin: 0 auto;
  background-color: #282828;
}
</style>
