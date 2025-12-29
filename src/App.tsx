import React from "react";
import { Card, PageHeader, StatCard, Button } from "customMain/components/shared";
import { useAppDispatch, useAppSelector } from "customMain/store/hooks";
import { increment, decrement, reset } from "customMain/store/slices/counterSlice";
import { addUser } from "customMain/store/slices/userSlice";
import { formatRelativeTime } from "customMain/utils/dateHelpers";
import { mockActivities } from "./data/mockData";

export default function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const users = useAppSelector((state) => state.users);

  const handleAddUserFromRemote = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    dispatch(addUser({
      id: randomId,
      name: `Remote User ${randomId}`,
      email: `remote${randomId}@example.com`,
      role: 'Remote User',
    }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <PageHeader 
        title="User Management Module" 
        description="Manage users, roles, and permissions from the remote micro-frontend with shared Redux" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Users (Redux)" value={users.totalCount.toString()} icon="👥" color="emerald" />
        <StatCard title="Counter (Shared)" value={counter.value.toString()} icon="🔢" color="blue" />
        <StatCard title="Pending Approvals" value="45" icon="⏳" color="orange" />
      </div>

      {/* Shared Redux Counter Demo */}
      <Card className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Shared Redux Counter</h2>
        <p className="text-gray-600 mb-4">
          This counter is shared with the host application via Module Federation!
          <br />
          <span className="font-semibold text-blue-600">Current Count: {counter.value}</span>
        </p>
        <div className="flex gap-4">
          <Button variant="primary" onClick={() => dispatch(increment())}>
            Increment from Remote
          </Button>
          <Button variant="secondary" onClick={() => dispatch(decrement())}>
            Decrement from Remote
          </Button>
          <Button variant="danger" onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          💡 Try incrementing here, then switch to the host app's home page to see the same value!
        </p>
      </Card>

      {/* Shared Redux Users Demo */}
      <Card className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Shared Redux Users</h2>
        <p className="text-gray-600 mb-4">
          Total Users in Shared Store: <span className="font-semibold text-emerald-600">{users.totalCount}</span>
        </p>
        <Button variant="success" onClick={handleAddUserFromRemote}>
          Add User from Remote Module
        </Button>
        <p className="mt-4 text-sm text-gray-500 italic">
          💡 Users added here will also appear in the host application!
        </p>
      </Card>
      
      <Card>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Management Features</h2>
        <p className="text-gray-600 mb-6">
          This is a remote micro-frontend consuming shared components from the host application.
        </p>
        
        <div className="flex gap-4">
          <Button variant="primary">Add User</Button>
          <Button variant="secondary">Import Users</Button>
          <Button variant="success">Export Data</Button>
        </div>
      </Card>
      
      <Card className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <span className="text-gray-700">{activity.description}</span>
              <span className="text-sm text-gray-500">{formatRelativeTime(activity.timestamp)}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}