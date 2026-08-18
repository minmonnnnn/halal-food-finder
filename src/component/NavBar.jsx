import { NavLink } from "react-router";
import "../index.css"

export default function NavBar(){


    return(
        <div className="nav-bar-container">
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/search">Find Food</NavLink>
        </div>
    )
}