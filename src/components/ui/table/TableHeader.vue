<script setup lang="ts"></script>
<template>
  <thead class="table-header">
    <tr>
      <slot />
    </tr>
  </thead>
</template>
<style scoped>
@import 'tailwindcss';
.table-header {
  @apply text-[var(--color-steel)];
}
</style>