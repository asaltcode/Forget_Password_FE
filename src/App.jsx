import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRouters from './utils/AppRouters'

const App = () => {
  const router = createBrowserRouter(AppRouters)
  return <RouterProvider router={router} ></RouterProvider>
}

export default App