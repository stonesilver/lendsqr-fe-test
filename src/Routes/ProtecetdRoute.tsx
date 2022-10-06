import { Outlet, Navigate } from 'react-router-dom';
import { useLocalStorage } from 'Hooks/useLocalStorage';

const ProtecetdRoute = () => {
  const { getLocalStorage } = useLocalStorage('user');

  return getLocalStorage ? <Outlet /> : <Navigate to='auth/sign-in' />;
};

export default ProtecetdRoute;
