import React, { createContext, useContext, useState } from 'react'

export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
    const [isBoxSearch, setIsBoxSearch] = useState(true);

    return (
        <ClientContext.Provider value={{ isBoxSearch, setIsBoxSearch }}>
            {children}
        </ClientContext.Provider>
    );
};

export default ClientProvider
