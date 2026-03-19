<template>
  <div ref="elRef" class="fade" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    delay?: number;
  }>(),
  { delay: 0 }
);

const elRef = ref<HTMLElement | null>(null);

const style = computed(() => ({
  transitionDelay: `${props.delay * 0.1}s`,
}));

let observer: IntersectionObserver | null = null;
let observedElement: Element | null = null;

onMounted(() => {
  if (!elRef.value) return;

  observedElement = elRef.value;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting && entry.target) {
        entry.target.classList.add("show");
      }
    },
    { threshold: 0.15 }
  );

  observer.observe(observedElement);
});

onUnmounted(() => {
  if (observer && observedElement) {
    observer.unobserve(observedElement);
    observer.disconnect();
  }
});
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
