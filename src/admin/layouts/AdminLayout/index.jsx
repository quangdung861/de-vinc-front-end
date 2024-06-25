import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Wraper } from "./styles";
import AdminProvider from "admin/contexts/AdminProvider";
import clsx from "clsx";

const AdminLayout = () => {
  const { pathname } = useLocation();
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  let pathnameLength = pathname.split("/").length;

  return (
    <AdminProvider>
      <Wraper>
        <div className="sidebar">
          <Sidebar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
        </div>
        <div className={clsx("main", !isShowSidebar && "disabled")}>
          {pathnameLength <= 3 && <Header />}
          <Outlet />
        </div>
      </Wraper>
    </AdminProvider>
  );
};

export default AdminLayout;
