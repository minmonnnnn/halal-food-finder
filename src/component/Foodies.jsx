export default function Foodies(props){

    return(
        <div className="individual-food-container">
            <h3>{props.name}</h3>
            <p>{props.eatery_type}</p>
            <p>{props.address}</p>
        </div>
    )

}