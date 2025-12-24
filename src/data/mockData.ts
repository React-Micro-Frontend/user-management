import { Activity } from '../types';

export const mockActivities: Activity[] = [
  {
    id: '1',
    description: 'New user registration: John Doe',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    type: 'registration',
  },
  {
    id: '2',
    description: 'Role updated: Jane Smith',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    type: 'update',
  },
  {
    id: '3',
    description: 'User deactivated: Mike Johnson',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    type: 'deactivation',
  },
];
