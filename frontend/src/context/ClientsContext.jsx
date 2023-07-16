import { createContext, useContext } from 'react';


export const ClientsContext = createContext();


export const ClientsProvider = ({ children }) => {    

    return (
        <ClientsContext.Provider value={ value }>
            {children}
        </ClientsContext.Provider>
    );
};