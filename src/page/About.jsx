import { useNavigate } from "react-router"

export default function About(){

    const navigate = useNavigate()
    return(

        <div className="about-container">
            About Section
            <button onClick = {() => navigate('/')} className="back-btn">Back to home</button>
        </div>
    )
}