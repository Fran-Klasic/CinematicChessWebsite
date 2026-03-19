<script setup lang="ts">
import { TheChessboard } from "vue3-chessboard";
import "vue3-chessboard/style.css";
</script>

<template>
  <div class="chess-preview-wrapper">
    <TheChessboard />
  </div>
</template>

<style scoped>
.chess-preview-wrapper {
  max-width: 100%;
  margin: var(--space-xl) auto 0;
  display: flex;
  justify-content: center;
}

.chess-preview-wrapper > * {
  max-width: 100%;
}
</style>
