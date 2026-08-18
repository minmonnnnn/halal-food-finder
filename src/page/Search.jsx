import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"


export default function Search(){

    const [searchParams] = useSearchParams()
    const searchTerm = searchParams.get('q')
    const [res, setRes] = useState("")
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
                    setRes(data.message)
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