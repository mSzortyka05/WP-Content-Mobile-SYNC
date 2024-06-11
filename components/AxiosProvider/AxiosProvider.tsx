import React, { ReactNode, createContext, useContext } from "react";
import axios, { AxiosInstance } from "axios";


interface AxiosContextProps {
  publicAxios: AxiosInstance
}

const AxiosContext = createContext<AxiosContextProps>({
  publicAxios: axios.create({
    baseURL: `${process.env.API_URL}`,
  })
});

const { Provider } = AxiosContext;

const AxiosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const publicAxios = axios.create({
    baseURL: `${process.env.API_URL}`,
  });

  return (
    <Provider
      value={{
        publicAxios
      }}
    >
      {children}
    </Provider>
  );
};

export { AxiosContext, AxiosProvider };
