import AdminSidebar from "./components/AdminSideBar";

const AdminDashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start border-t">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminDashBoard;
