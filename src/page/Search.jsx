import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import Foodies from "../component/Foodies"
import loading_gif from "../assets/loading.gif"
import loading_vid from "../assets/loading2.webm"


export default function Search(){

    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get('q')
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(true)
    const payLoad = {q: `${searchTerm}`}
    useEffect(() => {

        const fetchData = async () => {
            try{

                setLoading(true)
                const res = await fetch("/api/search",
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(payLoad)
                    }
                    
                )
                const data = await res.json()
                
                if(data){
                    setLoading(false)
                    setRes(prevRes => data.message.map(obj => 

                        
                        <Foodies
                            name = {obj.name}
                            address = {obj.address.replaceAll('\n', "").trim()}
                            eatery_type = {obj.eatery_type.replaceAll('\n',"").trim()}
                        />
                        
                    ))
                    
                }

            }
            catch(error){
                
                console.error("Could not communicate with python backend")
            }
        }
        fetchData()
    }, [searchTerm])
    return(
        <div>
            <h1>Search Page</h1>
            <div className="loading-container">
                {loading? <p>Loading...</p>: ""}
                {loading? <img src = {loading_gif}></img>: ""}
            </div>
            {res}
            
        </div>
    )
}