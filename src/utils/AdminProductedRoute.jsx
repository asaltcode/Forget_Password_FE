import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminProductedRoute = ({children}) => {
  let role = sessionStorage.getItem('role')

  return role === 'admin'? children:<Navigate to="/"/>
}

export default AdminProductedRoute