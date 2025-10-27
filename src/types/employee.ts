export interface Employee {
    id: string;
    email: string;
    name: string;
    profilePictureUrl: string;
    status: EmployeeStatus;
    createdAt: string;
}

export type EmployeeStatus = 'ACTIVE' | 'DEACTIVATED';