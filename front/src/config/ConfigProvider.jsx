import { createContext, useContext } from 'react';

const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {

  return (
    <ConfigContext.Provider value={{ server:"https://bookstore-nwf2.onrender.com" }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
