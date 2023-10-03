import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
    
    const refresh_token=localStorage.getItem("refresh-token")||"false"
  return (
    refresh_token !="false"?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute