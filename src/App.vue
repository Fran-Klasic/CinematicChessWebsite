<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <a href="#main-content" class="skip-link">Preskoči na sadržaj</a>
  <Header />
  <RouterView v-slot="{ Component }">
    <Transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -100px;
  left: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: 500;
  border-radius: var(--radius-sm);
  z-index: 2000;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: var(--space-md);
  outline: 2px solid var(--color-text-inverse);
  outline-offset: 2px;
}

</style>
