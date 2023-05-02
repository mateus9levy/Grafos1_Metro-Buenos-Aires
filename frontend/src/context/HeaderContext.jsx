import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [headerData, setHeaderData] = useState({
    message: '',
  });

  return (
    <HeaderContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderData = () => {
  const { headerData, setHeaderData } = useContext(HeaderContext);

  return { headerData, setHeaderData };
};
