import React, { createContext, useState } from 'react';

export interface SeassonProps {
  email: string;
  password: string;
  logged: boolean;
  sessionName: string;
  valid: boolean;
  seassonTime: number;
  setEmail: (newState: string) => void;
  setPassword: (newState: string) => void;
  setLogged: (newState: boolean) => void;
  setSessionName: (newState: string) => void;
  setValid: (newState: boolean) => void;
  setSeassonTime: (newState: number) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const LoginContext = createContext<SeassonProps>({} as SeassonProps);
LoginContext.displayName = 'login';

export const LoginProvider = ({ children }: ChildrenProps) => {
  const [email, setEmail] = useState<string>('');
  const [sessionName, setSessionName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);
  const [logged, setLogged] = useState<boolean>(true);
  const [seassonTime, setSeassonTime] = useState<number>(600);

  return (
    <LoginContext.Provider
      value={{
        logged,
        email,
        password,
        setEmail,
        setPassword,
        setLogged,
        valid,
        setValid,
        seassonTime,
        setSeassonTime,
        sessionName,
        setSessionName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
