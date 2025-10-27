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
    <div class="base-select">
        <label for="filter" class="base-select__label" v-if="props.label">{{ props.label }}</label>
        <div>
            <select 
                id="filter" 
                class="base-select__input"
                @change="handleChange" 
                :value="props.modelValue"
            >
                <option v-for="opt in props.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
        </div>
    </div>
</template>