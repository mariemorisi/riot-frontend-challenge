<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps<{
    profilePictureUrl: string;
    name: string;
}>();

const imgError = ref(false)
const employeeInitials = computed(() => {
    if (!props.name) return '';
    return props.name
        .split(' ')
        .map(n => n[0]?.toUpperCase())
        .slice(0, 2)
        .join('');
});
</script>
<template>
    <div v-if="!imgError" class="avatar-container">
        <img :src="profilePictureUrl" alt="Employee Avatar" class="avatar-image rounded-full" @error="imgError = true"/>
    </div>
    <div v-else class="avatar-container">
        {{ employeeInitials }}
    </div>
</template>
<style scoped>
@import 'tailwindcss';
.avatar-container {
    @apply w-[24px] h-[24px] rounded-full bg-blue-300 flex items-center justify-center text-white font-bold;
    font-size: var(--font-size-sb-13)
}
</style>