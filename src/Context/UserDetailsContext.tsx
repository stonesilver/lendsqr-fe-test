import * as React from 'react';
import { UserDetailProviderProps, contextProps } from './context.types';

const UserDetailContext = React.createContext({} as contextProps);

export const UserDetailProvider: React.FC<UserDetailProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>('General Details');

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <UserDetailContext.Provider value={{ activeTab, changeActiveTab }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
