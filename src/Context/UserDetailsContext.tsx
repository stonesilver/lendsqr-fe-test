import * as React from 'react';
import { UserDetailProviderProps, contextProps } from './context.types';
import { useLocalStorage } from 'Hooks/useLocalStorage';

const UserDetailContext = React.createContext({} as contextProps);

export const UserDetailProvider: React.FC<UserDetailProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>('General Details');
  const { getLocalStorage: userDetails } = useLocalStorage('__userData');

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <UserDetailContext.Provider
      value={{ activeTab, changeActiveTab, setActiveTab, userDetails }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
