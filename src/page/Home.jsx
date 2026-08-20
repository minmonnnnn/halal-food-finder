import React from "react"
import { useNavigate } from "react-router"

export default function Home(){

    const [search, setSearch] = React.useState("")
    const [valid, setValid] = React.useState(true)
    const navigate = useNavigate()

    function handleSubmit(e){

        e.preventDefault()
        const params = new URLSearchParams()
        if(search == ""){
            console.log("hello")
            if(valid){
                setValid(prev => !prev)
            }
            
        }
        else{
            setValid(prev => !prev)
            params.append("q", `${search}`)
            navigate(`/search?${params.toString()}`)
        }
        

    }

    return(

        <div className="home-container">
            <h2>Search Guide</h2>
            <ol className="search-guide">
                <li>Type the name of shopping mall you 
                    would like to eat at.
                </li>
                <li>
                    Enter search to get the list of all halal resturants in that mall!
                </li>
            </ol>
            {valid? "": <h4 style={{color:"red"}}>Search cannot be empty!</h4>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="mall" className="label">Name of shopping mall: </label>
                <input
                    type = "text" 
                    onChange={(e) => setSearch(e.target.value)}
                    value = {search}
                    placeholder="e.g Jurong Point..."
                    id = "mall"
                    className="input-field"
                />
                <button type = "submit" className="search-btn">Search</button>
                
            </form>
        </div>
    )
}