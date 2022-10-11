import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'pages/Login/Login.page';
import Users from 'pages/Users/Users.page';
import AppLayout from 'Layouts/AppLayout/AppLayout.layout';
import Page404 from 'pages/Page404/Page404.page';
import './App.scss';
import UserDetail from 'pages/UserDetail/UserDetail.page';
import OthersPagesDemo from 'pages/OtherPagesDemo/OtherPagesDemo.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Protected routes */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Navigate to='users' />} />
          <Route path='users' element={<Users />} />
          <Route path='user' element={<UserDetail />} />
          <Route path='guarantors' element={<OthersPagesDemo />} />
          <Route path='loans' element={<OthersPagesDemo />} />
          <Route path='decision-models' element={<OthersPagesDemo />} />
          <Route path='savings' element={<OthersPagesDemo />} />
          <Route path='loan-request' element={<OthersPagesDemo />} />
          <Route path='whitelist' element={<OthersPagesDemo />} />
          <Route path='karma' element={<OthersPagesDemo />} />
          <Route path='organization' element={<OthersPagesDemo />} />
          <Route path='loan-products' element={<OthersPagesDemo />} />
          <Route path='savings-products' element={<OthersPagesDemo />} />
          <Route path='fees-and-charges' element={<OthersPagesDemo />} />
          <Route path='transactions' element={<OthersPagesDemo />} />
          <Route path='services' element={<OthersPagesDemo />} />
          <Route path='service-account' element={<OthersPagesDemo />} />
          <Route path='settlements' element={<OthersPagesDemo />} />
          <Route path='reports' element={<OthersPagesDemo />} />
          <Route path='preferences' element={<OthersPagesDemo />} />
          <Route path='fees-and-pricing' element={<OthersPagesDemo />} />
          <Route path='audit-logs' element={<OthersPagesDemo />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/auth/sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
