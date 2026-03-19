<template>
  <ScrollFade :delay="delay">
    <section :id="id" class="glass block">
      <h2>{{ title }}</h2>
      <slot />
    </section>
  </ScrollFade>
</template>

<script setup lang="ts">
import ScrollFade from "./ScrollFade.vue";

defineProps<{
  title: string;
  delay?: number;
  id?: string;
}>();
</script>

<style scoped>
.glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(14px);
  border-radius: var(--radius-xl);
  padding: var(--space-xl) var(--space-2xl);
  box-shadow: var(--shadow-lg);
}

.block {
  margin-bottom: var(--space-4xl);
}

h2 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-lg);
  color: var(--color-section-heading);
}

h2:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .glass {
    padding: var(--space-lg) var(--space-xl);
  }

  .block {
    margin-bottom: var(--space-3xl);
  }

  h2 {
    font-size: var(--text-xl);
  }
}

@media (max-width: 480px) {
  .glass {
    padding: var(--space-md) var(--space-lg);
  }
}
</style>
