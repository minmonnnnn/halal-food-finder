import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import Foodies from "../component/Foodies"


export default function Search(){

    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get('q')
    const [res, setRes] = useState([])
    const payLoad = {q: `${searchTerm}`}
    useEffect(() => {

        const fetchData = async () => {
            try{

                const res = await fetch("/api/search",
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(payLoad)
                    }
                    
                )
                const data = await res.json()
                if(data){

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
            <p>{searchTerm}</p>
            {res}
        </div>
    )
}