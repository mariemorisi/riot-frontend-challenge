<script lang="ts"></script>
<template>
  <th class="table-header-cell">
    <slot />
  </th>
</template>
<style scoped>
@import 'tailwindcss';
.table-header-cell {
    font-weight: var(--font-weight-md-14);
    font-size: var(--font-size-md-14);
}
</style>