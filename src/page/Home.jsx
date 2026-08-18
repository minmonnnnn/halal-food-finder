import React from "react"
import { useNavigate } from "react-router"

export default function Home(){

    const [search, setSearch] = React.useState("")
    const navigate = useNavigate()

    function handleSubmit(e){

        e.preventDefault()
        const params = new URLSearchParams()
        params.append("q", `${search}`)
        navigate(`/search?${params.toString()}`)

    }

    return(

        <div className="home-container">
            <h1>Home Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text" 
                    onChange={(e) => setSearch(e.target.value)}
                    value = {search}
                    placeholder="Enter desired location"
                />
                <button type = "submit">Search</button>
            </form>
        </div>
    )
}