<template>
  <q-item class="task-item">
    <div class="task-color-bar" :style="{ backgroundColor: task.color }"></div>
    <q-item-section>
      <div class="task">
        <q-chip
          class="q-chip__header"
          :class="{ 'completed-task': task.completed }"
          row
          q-chip--colored
          q-chip--outline
        >
          {{ task.name }}
        </q-chip>
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
        @update:model-value="updateStatus"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["update-status"]);

const updateStatus = () => {
  emit("update-status", props.task);
};
</script>

<style scoped lang="scss">
.task-item {
  margin-top: 10px;
  background: #282828;
  border-radius: 25px;
  padding: 10px;
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

  .task {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    text-align: left;

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
}

.q-item__section {
  font-size: 24px;
  font-weight: 600;
}
</style>
