import { ref, onMounted } from 'vue';
import type { Employee } from '@/types/employee';
import { fetchEmployees } from '@/api/employees';


export function useEmployees() {
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const employees = ref<Employee[]>([]);

    const loadEmployees = async () => {
        loading.value = true;
        error.value = null;
        try {
            employees.value = await fetchEmployees();
            console.log('employees.value composable : ', employees.value);
        } catch (err) {
            error.value = (err as Error).message;
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        loadEmployees();
    });

    return {
        loading,
        error,
        employees,
        loadEmployees,
    };
}