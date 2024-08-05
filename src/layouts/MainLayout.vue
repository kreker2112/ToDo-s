<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> To Do </q-toolbar-title>
        <q-btn icon="settings" @click="$router.push('/settings')" flat round />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.bg-dark {
  background: #222222;
}
</style>
