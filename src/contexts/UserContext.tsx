import React, { createContext, useReducer, ReactNode } from 'react';
import { inicitalState, UserReducer } from '@reducers/UserReducer';

// Defina os tipos para o contexto
type UserState = typeof inicitalState;
type UserDispatch = React.Dispatch<any>; // Idealmente, substitua 'any' pelo tipo das suas actions

export interface UserContextType {
  state: UserState;
  dispatch: UserDispatch;
}

// Forneça um valor inicial para o contexto
export const UserContext = createContext<UserContextType>({
  state: inicitalState,
  dispatch: () => null, // função vazia como valor inicial
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, inicitalState);

  return (
    <UserContext.Provider value={{ state, dispatch }}> 
      {children}
    </UserContext.Provider> 
  );
};

export default UserProvider;