import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TableProvider } from 'Context/TableContext';
import { UserDetailProvider } from 'Context/UserDetailsContext';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TableProvider>
      <UserDetailProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserDetailProvider>
    </TableProvider>
  </React.StrictMode>
);
