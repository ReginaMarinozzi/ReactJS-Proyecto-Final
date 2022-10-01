import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import ResponsiveAppBar from '../components/NavBar/NavBar'

const AppRouter = () => {

    const {user} = useLoginContext()

    return (
        <BrowserRouter>
        <ResponsiveAppBar/>
       
            {
            user
            
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRouter