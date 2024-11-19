import React from "react";
import Sidebar from "@/components/layouts/Sidebar";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen  overflow-hidden">
      <Sidebar />
      <main className="w-full flex-1 overflow-x-hidden bg-white px-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
