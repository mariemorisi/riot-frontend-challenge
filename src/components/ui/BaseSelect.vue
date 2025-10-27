<script setup lang="ts">
type Option = {
    id: string | number;
    label: string;
    value: string | number;
};

const props = defineProps <{
    options: Option[];
    modelValue: string | number | null;
    label?: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [string | number];
}>();

const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    emit('update:modelValue', target.value);
};

</script>
<template>
    <div class="base-select m-[24px]">
        <label for="filter" class="base-select__label" v-if="props.label">{{ props.label }}</label>
        <div class="relative">
            <select 
                id="filter" 
                class="base-select__input appearance-none pr-8"
                @change="handleChange" 
                :value="props.modelValue"
            >
                <option v-for="opt in props.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
            <svg
                class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-charcoal)] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M6 9l6 6 6-6" />
            </svg>
        </div>
    </div>
</template>
<style scoped>
@import 'tailwindcss';
.base-select {
  @apply mb-4 flex flex-col gap-1 items-start;
}

.base-select__input {
  @apply 
    px-3 
    pr-8 
    h-[32px]
    min-w-[150px]
    rounded-[10px]
    text-[var(--font-size-sb-13)]
    font-[var(--font-weight-sb-13)]
    shadow-[var(--shadow-regular-1)]
    focus:outline-none;
}
</style>