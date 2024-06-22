import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Wraper } from "./styles";
import AdminProvider from "admin/contexts/AdminProvider";
import { Loading } from "@common";
import clsx from "clsx";
const AdminLayout = () => {
  const { pathname } = useLocation();
  let pathnameLength = pathname.split("/").length;
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <AdminProvider>
      {/* <Loading /> */}
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
