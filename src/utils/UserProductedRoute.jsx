import React from 'react'
import { Navigate } from 'react-router-dom'

const UserProductedRoute = ({children}) => {
    let role = sessionStorage.getItem('role')
  
    return role === 'user'? children:<Navigate to="/"/>
  }

export default UserProductedRoute