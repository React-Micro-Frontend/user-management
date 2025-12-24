// User Management specific types

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  lastLogin?: string;
}

export interface UserFormData {
  email: string;
  name: string;
  role: string;
  password?: string;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  pendingApprovals: number;
}

export interface Activity {
  id: string;
  description: string;
  timestamp: string;
  type: 'registration' | 'update' | 'deactivation';
}
