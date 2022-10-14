import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'pages/Login/Login.page';
import Users from 'pages/Users/Users.page';
import AppLayout from 'Layouts/AppLayout/AppLayout.layout';
import Page404 from 'pages/Page404/Page404.page';
import UserDetail from 'pages/UserDetail/UserDetail.page';
import OthersPagesDemo from 'pages/OtherPagesDemo/OtherPagesDemo.component';
import { dummyRoutes } from 'utils/data/dummyRoutes';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Protected routes */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Navigate to='users' />} />
          <Route path='users'>
            <Route index element={<Users />} />
            <Route path=':userId' element={<UserDetail />} />
          </Route>
          {dummyRoutes.map((route) => (
            <Route key={route} path={route} element={<OthersPagesDemo />} />
          ))}
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/auth/sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
