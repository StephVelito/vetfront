import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const PrivateRoutes = () => {

  const {user} = useContext(AuthContext)

  if(!user){
    return <Navigate to='/' />
  }
  return (
    <Outlet/>
  )
}

export default PrivateRoutes