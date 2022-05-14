import {React} from "react";

const GroceryItem = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.isReoccurring}</p>
            <p>{props.frequency}</p>
            <p>{props.source}</p>
            <p>{props.dateSubmitted}</p>
        </div>
    )
}

export default GroceryItem;