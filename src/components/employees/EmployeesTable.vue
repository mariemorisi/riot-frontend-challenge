<template>
  <div>
     <BaseSelect 
        :options="filterOptions"
        v-model="selectedFilter"
    />
    <Table v-if="!loading && !error" class="mt-4">
      <TableHeader>
        <TableRow class="mb-1">
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
          <TableRow v-for="employee in filteredEmployees" :key="employee.id">
            <TableCell>
              <div class="flex items-center">
                <EmployeeAvatar :profilePictureUrl="employee.profilePictureUrl" :name="employee.name" />
                <div class="ml-2">{{ employee.name }}</div>
              </div>
            </TableCell>
            <TableCell>
              <span :class="{'employee_text-green': employee.status === 'ACTIVE'}">
                {{ employee.status.charAt(0).toUpperCase() + employee.status.slice(1).toLowerCase() }}
              </span>
            </TableCell>
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
import BaseSelect from '@/components/ui/BaseSelect.vue';
import EmployeeAvatar from '@/components/employees/EmployeeAvatar.vue';

import { useEmployees } from '@/composables/useEmployees';
const { loading, error, filteredEmployees, selectedFilter } = useEmployees();

const filterOptions = [
    { id: "all", label: 'All employees', value: 'ALL' },
    { id: "active", label: 'Active employees', value: 'ACTIVE' },
    { id: "deactivated", label: 'Deactivated employees', value: 'DEACTIVATED' }
];

</script>
<style scoped>
.employee_text-green {
  color: var(--color-green);
}
</style>
