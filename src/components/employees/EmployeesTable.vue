<template>
  <div>
     <BaseSelect 
        :options="filterOptions" 
        :modelValue="selectedFilter"
        @update:modelValue="handleChangeFilter"
    />
    <Table v-if="!loading && !error">
      <TableHeader>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
      </TableHeader>
      <TableBody>
          <TableRow v-for="employee in employees" :key="employee.id">
            <TableCell>{{ employee.profilePictureUrl }}</TableCell>
            <TableCell>{{ employee.name }}</TableCell>
            <TableCell>{{ employee.status }}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
    <div v-else-if="loading">Loading...</div>
    <div v-else-if="error">Error loading employees</div>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/ui/table/Table.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableHeaderCell from '@/components/ui/table/TableHeaderCell.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableRow from '@/components/ui/table/TableRow.vue';
import TableCell from '@/components/ui/table/TableCell.vue';
import BaseSelect from '@/components/ui/select/BaseSelect.vue';

import { ref } from 'vue';

import { useEmployees } from '@/composables/useEmployees';
const { employees, loading, error } = useEmployees();

const filterOptions = [
    { id: "all", label: 'All employees', value: 'ALL' },
    { id: "active", label: 'Active employees', value: 'ACTIVE' },
    { id: "deactivated", label: 'Deactivated employees', value: 'DEACTIVATED' }
];

const selectedFilter = ref('ALL');

const handleChangeFilter = (value: string | number) => {
    const selected = filterOptions.find(option => option.value === value)?.value;
    if (selected) {
        selectedFilter.value = selected;
    }
    console.log('selectedFilter.value : ', selectedFilter.value);
};

</script>
