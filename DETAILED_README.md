# User Management - Remote Application

## 🏛️ Overview

The **User Management** micro frontend provides user administration functionality including user listing, creation, editing, and role management.

### Role in Architecture
- **Remote Application**: Consumed by shell application
- **Domain**: User administration and access control
- **Shared Modules**: Exposes user components for reuse

---

## 🏗️ Architecture

### Folder Structure
```
src/
├── components/
│   ├── UserList.tsx            # User table with search/filter
│   ├── UserForm.tsx            # User creation/edit form
│   ├── UserCard.tsx            # User display card
│   ├── RoleSelector.tsx        # Role dropdown component
│   └── index.ts                # Component exports
├── config/
│   └── module.config.ts        # Module-specific configuration
│       - API endpoints
│       - Permissions
│       - Module metadata
├── data/
│   ├── mockUsers.ts            # Mock user data (dev)
│   └── userColumns.ts          # Table column definitions
├── services/
│   ├── userService.ts          # User CRUD operations
│   │   - getUsers()
│   │   - createUser()
│   │   - updateUser()
│   │   - deleteUser()
│   │   - getUserById()
│   └── index.ts                # Service exports
├── types/
│   ├── User.ts                 # User type definitions
│   │   interface User {
│   │     id: string;
│   │     name: string;
│   │     email: string;
│   │     role: UserRole;
│   │     status: UserStatus;
│   │     department: string;
│   │   }
│   ├── Role.ts                 # Role type definitions
│   └── index.ts                # Type exports
├── utils/
│   ├── userValidation.ts       # User form validation
│   ├── userFilters.ts          # User filtering utilities
│   └── index.ts                # Utility exports
├── App.tsx                     # Main application component
├── Bootstrap.tsx               # Module initialization
├── index.tsx                   # Entry point
└── remotes.d.ts                # Type definitions for remotes
```

---

## 🔌 Module Federation

### Exposed Modules
```javascript
exposes: {
  "./UserManagement": "./src/App.tsx",
  "./UserList": "./src/components/UserList.tsx",
  "./UserForm": "./src/components/UserForm.tsx"
}
```

### Consumed Modules (from Shell)
```javascript
// Import shared components
import { PageHeader, Card, Button } from 'customMain/components/shared';

// Import shared store
import { useAppSelector } from 'customMain/store/hooks';

// Import Tailwind styles
import 'customMain/TailwindStyles';
```

---

## 💡 Implementation Examples

### Using Shared Components
```typescript
// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import { PageHeader, Card, Button } from 'customMain/components/shared';
import { useAppSelector } from 'customMain/store/hooks';
import { userService } from '../services';
import type { User } from '../types';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentUser = useAppSelector(state => state.user);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await userService.getUsers();
    setUsers(data);
  };

  return (
    <div className="p-6">
      <PageHeader 
        title="User Management" 
        subtitle="Manage system users and roles"
      />
      
      <Card className="mt-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">All Users</h2>
          <Button variant="primary" onClick={() => {}}>
            Add User
          </Button>
        </div>
        
        <table className="w-full">
          {/* User table implementation */}
        </table>
      </Card>
    </div>
  );
};

export default UserList;
```

### User Service Implementation
```typescript
// src/services/userService.ts
import { apiService } from 'customMain/services';
import type { User } from '../types';

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await apiService.get('/users');
    return response.data;
  },

  async getUserById(id: string): Promise<User> {
    const response = await apiService.get(`/users/${id}`);
    return response.data;
  },

  async createUser(user: Partial<User>): Promise<User> {
    const response = await apiService.post('/users', user);
    return response.data;
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const response = await apiService.put(`/users/${id}`, updates);
    return response.data;
  },

  async deleteUser(id: string): Promise<void> {
    await apiService.delete(`/users/${id}`);
  }
};
```

### Type Definitions
```typescript
// src/types/User.ts
export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  OFFICER = 'OFFICER',
  VIEWER = 'VIEWER'
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  department: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  role: UserRole;
  department: string;
}
```

---

## 🚀 Getting Started

### Development
```bash
npm install
npm start
# Runs on http://localhost:5001
```

### Build
```bash
npm run build
```

### Testing in Isolation
The app can run standalone for development. Configure `remotes.d.ts` to point to local shell:
```typescript
declare module 'customMain/components/shared' {
  export * from '../../custom-main/src/components/shared';
}
```

---

## 🔗 Integration with Shell

### Routing
The shell loads this module at `/user-management`:
```typescript
// In custom-main
<Route path="/user-management" element={<UserManagement />} />
```

### State Sharing
Uses shared Redux store from shell for user authentication:
```typescript
const currentUser = useAppSelector(state => state.user);
```

---

## 📦 Dependencies

### Runtime Dependencies
- React 19.2.3
- React Router DOM
- Redux Toolkit (from shell)
- Axios (from shell)

### Remote Dependencies
- `customMain/components/shared` - Shared UI components
- `customMain/store` - Redux store
- `customMain/TailwindStyles` - Tailwind CSS

---

## 🔗 Related Documentation

- [ARCHITECTURE.md](../ARCHITECTURE.md) - Overall architecture
- [custom-main README](../custom-main/README.md) - Shell documentation

---

## 📞 Support

For issues or questions, refer to the main project documentation.
