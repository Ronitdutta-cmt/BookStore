import { createContext, useContext } from 'react';

const ConfigContext = createContext({});

export const ConfigProvider = ({ children }) => {
  const server = "https://bookstore-nwf2.onrender.com";

  return (
    <ConfigContext.Provider value={{ server }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
