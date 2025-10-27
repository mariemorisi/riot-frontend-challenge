import type { Employee } from '@/types/employee'

const BASE_URL = 'http://localhost:9000'

export async function fetchEmployees() {
    const response = await fetch(`${BASE_URL}/employees`)
    if (!response.ok) {
        throw new Error('Failed to fetch employees')
    }
    const data = await response.json()
    return data as Employee[]
}