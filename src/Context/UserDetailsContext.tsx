import * as React from 'react';
import {
  UserDetailProviderProps,
  contextProps,
  UserObjectType,
} from './context.types';
import { useLocation } from 'react-router-dom';

const UserDetailContext = React.createContext({} as contextProps);

export const UserDetailProvider: React.FC<UserDetailProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>('General Details');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [userDetails, setUserDetails] = React.useState({} as UserObjectType);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];

  const changeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  // This useEffect hook sets the user details in two ways
  // 1. when the user clicks more details on the users page,
  // it sets the user details to local storage
  // 2. when the user trys to access a user from the browser address bar. This way,
  // the user detail ain't in local storage. So the need to fetch the user from the backend using the user ID in the url.
  // Basically the hook checks if the user object is in local storage it sets it as userDetail or else fetch and set it as userDetail
  React.useEffect(() => {
    const userDataInLocalStorage = localStorage.getItem('__userData');

    const fetchData = () => {
      setIsLoading(true);
      if (userDataInLocalStorage) {
        const data = JSON.parse(userDataInLocalStorage);
        setUserDetails(data);
        setIsLoading(false);
      } else {
        userId &&
          fetch(`${process.env.REACT_APP_API}/${userId}`)
            .then((res) => res.json())
            .then((data) => {
              setUserDetails(data);
              setIsLoading(false);
            })
            .catch(() => console.log('error occured'));
      }
    };

    fetchData();

    return () => {
      localStorage.removeItem('__userData');
    };
  }, [userId]);

  return (
    <UserDetailContext.Provider
      value={{
        activeTab,
        changeActiveTab,
        setActiveTab,
        userDetails,
        isLoading,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
