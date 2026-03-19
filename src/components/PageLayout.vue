<template>
  <div class="page">
    <div class="bg-layer vignette"></div>
    <div class="bg-layer glow"></div>
    <main id="main-content" class="content" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--color-bg);
}

.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.vignette {
  background: radial-gradient(
    circle,
    transparent 40%,
    var(--vignette-end, rgba(0, 0, 0, 0.6)) 100%
  );
}

.glow {
  background:
    radial-gradient(
      circle at 30% 20%,
      var(--glow-color-1, rgba(99, 102, 241, 0.15)),
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 60%,
      var(--glow-color-2, rgba(14, 165, 233, 0.12)),
      transparent 45%
    );
  filter: blur(80px);
}

.content {
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  padding: 160px var(--space-xl) var(--space-4xl);
  font-family: var(--font-family);
  color: var(--color-text-primary);
  line-height: 1.85;
}

@media (max-width: 768px) {
  .content {
    padding: 120px var(--space-lg) var(--space-3xl);
  }
}

@media (max-width: 480px) {
  .content {
    padding: 100px var(--space-md) var(--space-2xl);
  }
}
</style>
