<template>
  <div>
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

import { useEmployees } from '@/composables/useEmployees';
const { employees, loading, error } = useEmployees();
</script>
