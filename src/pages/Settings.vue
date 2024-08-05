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
              {{ completedTasks }}
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Pending Tasks</q-item-section>
            <q-item-section>
              {{ pendingTasks }}
            </q-item-section>
          </q-item>
          <q-btn
            class="q-mt-md"
            label="Back to ToDos"
            @click="goToToDos"
            color="primary"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const completedTasks = computed(
  () => tasks.filter((task) => task.completed).length
);
const pendingTasks = computed(
  () => tasks.filter((task) => !task.completed).length
);

const router = useRouter();
const goToToDos = () => {
  router.push("/");
};
</script>

<style scoped>
.settings {
  max-width: 400px;
  margin: 0 auto;
  background-color: #282828;
}
</style>
