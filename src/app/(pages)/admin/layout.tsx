const AdminDashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start ">
      <div className="w-[20%] border-r">AdminDashBoardSidebar</div>
      {children}
    </div>
  );
};

export default AdminDashBoard;
