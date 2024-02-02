import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';//importing toastcontainer and toast css from toastify
import UserEmailComponent from './context/UserEmailComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserEmailComponent>
    <App/>
    </UserEmailComponent>
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
)
