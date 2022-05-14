import {React, useEffect, useState} from "react";
import { buildApiUrl } from "../utils";
import GroceryItem from "./grocery-item";

const GroceryList = () => {
    const [groceryItems, setGroceryItems] = useState([]);

    useEffect(() => {
        getGroceryItems();
    }, []);

    const getGroceryItems = () => {
        fetch(buildApiUrl("/groceryitems"))
        .then(response => response.json())
        .then(response => setGroceryItems(response));
    }

    return(
        <div>
            {groceryItems.map((groceryItem, i) => (
                <GroceryItem 
                    key={i} 
                    name={groceryItem.name} 
                    quantity={groceryItem.quantity} 
                    isReoccurring={groceryItem.isReoccurring}
                    frequency={groceryItem.frequency}
                    source={groceryItem.source}
                    dateSubmitted={groceryItem.dateSubmitted}
                />
            ))}
        </div>
    );
}

export default GroceryList;