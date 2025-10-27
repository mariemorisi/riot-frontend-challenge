import { ref, onMounted, computed } from 'vue';
import type { Employee } from '@/types/employee';
import { fetchEmployees } from '@/api/employees';

type FilterValue = 'ALL' | 'ACTIVE' | 'DEACTIVATED';
export function useEmployees() {
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const employees = ref<Employee[]>([]);
    const selectedFilter = ref<FilterValue>('ALL');

    const loadEmployees = async () => {
        loading.value = true;
        error.value = null;
        try {
            employees.value = await fetchEmployees();
        } catch (err) {
            error.value = (err as Error).message;
        } finally {
            loading.value = false;
        }
    };

    const filteredEmployees = computed(() => {
        if (selectedFilter.value === 'ALL') return employees.value;
        return employees.value.filter(emp => emp.status === selectedFilter.value);
    });

    onMounted(() => {
        loadEmployees();
    });

    return {
        loading,
        error,
        employees,
        loadEmployees,
        filteredEmployees,
        selectedFilter
    };
}