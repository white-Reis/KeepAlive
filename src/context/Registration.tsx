import { getDocs } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { User } from '../interface/user';
import { userColletionRef } from '../service/firebaseConfig';

export interface RegistrationProps {
  completeName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  validName: boolean;
  validEmail: boolean;
  validPassword: boolean;
  validPasswordConfirm: boolean;
  users: User[];
  members: number;

  setCompleteName: (newState: string) => void;
  setValidName: (newState: boolean) => void;
  setEmail: (newState: string) => void;
  setValidEmail: (newState: boolean) => void;
  setPassword: (newState: string) => void;
  setPasswordConfirm: (newState: string) => void;
  setValidPassword: (newState: boolean) => void;
  setValidPasswordConfirm: (newState: boolean) => void;
  setUsers: (newState: User[]) => void;
  setMembers: (newState: number) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const RegisterContext = createContext<RegistrationProps>(
  {} as RegistrationProps,
);
RegisterContext.displayName = 'Register';

export const RegisterProvider = ({ children }: ChildrenProps) => {
  const [completeName, setCompleteName] = useState<string>('');
  const [validName, setValidName] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [validPasswordConfirm, setValidPasswordConfirm] =
    useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [members, setMembers] = useState<number>(users.length);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userColletionRef);
      setUsers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [members]);

  return (
    <RegisterContext.Provider
      value={{
        completeName,
        email,
        password,
        setCompleteName,
        setEmail,
        setPassword,
        validName,
        setValidName,
        validEmail,
        setValidEmail,
        validPassword,
        setValidPassword,
        passwordConfirm,
        setPasswordConfirm,
        validPasswordConfirm,
        setValidPasswordConfirm,
        users,
        setUsers,
        members,
        setMembers,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
