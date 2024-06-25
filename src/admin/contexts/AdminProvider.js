import React, { createContext, useContext, useState } from 'react'

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [breadcrum, setBreadcrum] = useState();

  return (
    <AdminContext.Provider value={{ breadcrum, setBreadcrum }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider

export const useLoading = () => useContext(AdminContext);