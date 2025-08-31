import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)

  if (user) {
    return children
  }

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>
}

export default PrivateRoute
