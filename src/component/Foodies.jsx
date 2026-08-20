import maps from "../assets/google-maps.png"

export default function Foodies(props){

    const encodedAddress = encodeURIComponent(props.address)
    
    return(
        <div className="individual-food-container">
            <h3>{props.name}</h3>
            <p>{props.eatery_type}</p>
            <div className="address-container">
                <p>{props.address}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer"><img src = {maps} alt = "maps-logo" style={{width: "60px", height: "45px"}}></img></a>
            </div>
        </div>
    )

}