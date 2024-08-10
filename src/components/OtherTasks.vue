<template>
  <div
    class="task-category"
    v-for="category in categories"
    :key="category.date"
  >
    <q-item>
      <q-item-section>
        <div class="category-title">
          <div class="category-color-bar"></div>
          <span>{{ tasksBlockTitle(category.date) }}</span>
        </div>
      </q-item-section>
      <q-item-section side>
        <q-btn
          dense
          flat
          icon="keyboard_arrow_down"
          @click="$emit('toggleCategoryVisibility', category.date)"
        />
      </q-item-section>
    </q-item>
    <q-list v-if="visibleCategories[category.date]" class="task-list">
      <q-item v-for="task in category.tasks" :key="task.id" class="task-item">
        <div
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
            @update:model-value="$emit('updateTaskStatus', task)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { formatDate } from "../utils/utils";

const props = defineProps({
  categories: Array,
  visibleCategories: Object,
});

const emit = defineEmits(["toggleCategoryVisibility", "updateTaskStatus"]);

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrowDateString = tomorrowDate.toISOString().split("T")[0];

const tasksBlockTitle = computed(() => (date) => {
  return date === tomorrowDateString
    ? "Tomorrow Tasks"
    : `${formatDate(date)} Tasks`;
});
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
    flex-direction: row;
    align-items: center;

    .category-color-bar {
      width: 5px;
      height: 2em;
      background-color: #f0f0f0;
      margin-right: 10px;
      border-radius: 18px;
    }
  }

  .task-list {
    margin-top: 10px;
  }

  .task-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 10px 0;

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
}

.q-item__section {
  font-size: 24px;
  font-weight: 600;
}
</style>
