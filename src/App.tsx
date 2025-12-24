import React from "react";
import { Card, PageHeader, StatCard, Button } from "customMain/components/shared";

export default function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <PageHeader 
        title="User Management Module" 
        description="Manage users, roles, and permissions from the remote micro-frontend" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Users" value="2,847" icon="👥" color="emerald" />
        <StatCard title="Active Users" value="2,456" icon="✅" color="blue" />
        <StatCard title="Pending Approvals" value="45" icon="⏳" color="orange" />
      </div>
      
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
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">New user registration: John Doe</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Role updated: Jane Smith</span>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">User deactivated: Mike Johnson</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
}