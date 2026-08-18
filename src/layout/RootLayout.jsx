import { Outlet } from "react-router"
import NavBar from "../component/NavBar"
export default function RootLayout(){

    return(

        <div className="root-container">
            <NavBar/>
            <Outlet/>
        </div>
    )
}