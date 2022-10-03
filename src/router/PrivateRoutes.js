import { useLoginContext } from "../context/LoginContext"
import Loader from '../components/Loader/Loader'
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    
    const { user, loading} = useLoginContext()

    if (loading) return <Loader />
    
    return user
    ? <Outlet />
    : <Navigate to="/login" />
}

export default PrivateRoutes

