<template>
  <div class="task-category">
    <q-item>
      <q-item-section>
        <div class="category-title">
          <div class="category-color-bar"></div>
          <span>{{ title }}</span>
        </div>
      </q-item-section>
      <q-item-section side>
        <q-btn
          dense
          flat
          icon="keyboard_arrow_down"
          @click="toggleVisibility"
        />
      </q-item-section>
    </q-item>
    <q-list v-if="isVisible" class="task-list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @update-status="updateTaskStatus"
      />
    </q-list>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import TaskItem from "./TaskItem.vue";

const props = defineProps({
  title: String,
  tasks: Array,
  isVisible: Boolean,
});

const emit = defineEmits(["update-status", "toggle-visibility"]);

const toggleVisibility = () => {
  emit("toggle-visibility");
};

const updateTaskStatus = (task) => {
  emit("update-status", task);
};
</script>

<style scoped lang="scss">
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

  .task-list {
    background: #282828;
    border-radius: 25px;
    padding: 10px;
    color: white;
  }
}

.q-item__section {
  font-size: 24px;
  font-weight: 600;
}
</style>
