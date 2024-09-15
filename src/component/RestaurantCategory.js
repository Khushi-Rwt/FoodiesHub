import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return(
        <div>
            {/* Header Section */}
            <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-md">{data.title}({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                
                {/* Accordion Body */}
                {showItems && <ItemList items={data.itemCards} />}
                
            </div>
        </div>
    )  
}   

export default RestaurantCategory;