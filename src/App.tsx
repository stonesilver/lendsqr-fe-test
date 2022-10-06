import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'pages/Login/Login.page';
import Users from 'pages/Users/Users.page';
import AppLayout from 'Layouts/AppLayout/AppLayout.layout';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* Protected routes */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Navigate to='users' />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/auth/sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
