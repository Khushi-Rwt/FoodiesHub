import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <ShimmerUI />;

    // const restaurantData = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards[0]?.card.info || {};
    // console.log(restaurantData);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;
    
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories); 

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            {/* categories accordians */}
            {categories.map((category, index)=>(
                <RestaurantCategory 
                    data={category?.card?.card} 
                    key={category?.card?.card?.title} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    );
}

export default RestaurantMenu;