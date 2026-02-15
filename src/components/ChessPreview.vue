<script setup lang="ts">
import { TheChessboard } from "vue3-chessboard";
import "vue3-chessboard/style.css";
</script>

<template>
  <TheChessboard />
</template>

<style scoped>
.upload-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.drop-zone {
  border: 2px dashed #64748b;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  color: #cbd5f5;
  cursor: pointer;
}

.error {
  color: #f87171;
}

.info {
  font-size: 1.1rem;
  color: #e5e7eb;
}
</style>
