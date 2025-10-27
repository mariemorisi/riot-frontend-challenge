<script lang="ts" setup></script>
<template>
    <td class="table-cell py-[10px]">
        <slot />
    </td>
</template>
<style scoped>
@import 'tailwindcss';
.table-cell {
    font-size: var(--font-size-md-14)
}
</style>