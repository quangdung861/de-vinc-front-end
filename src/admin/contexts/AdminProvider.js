import React, { createContext, useContext, useEffect, useState } from 'react'

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [breadcrum, setBreadcrum] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const $$ = {
      loading: (state) => setIsLoading(state)
    }
    window.$$ = $$;
}, []);


  return (
    <AdminContext.Provider value={{ breadcrum, setBreadcrum, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider

export const useLoading = () => useContext(AdminContext);