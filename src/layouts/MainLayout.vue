<template>
  <q-layout view="hHh lpR fFf" class="bg-dark">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> To Do </q-toolbar-title>
        <router-link to="/settings" class="router-link" exact>
          <q-icon name="settings" color="white" size="2.2rem" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.bg-dark {
  background: #222222;
}
</style>
