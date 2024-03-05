import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoutes = () => {

  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.user.token)
  
return !isLoggedIn ? (
    <Navigate to="/" replace state={{ from: location.pathname }} />
  ) : (
    <Outlet />
  )
}
export default ProtectedRoutes
