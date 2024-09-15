import { CDN_URL } from "../utils/Constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurentCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext)
    // const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resData;
    return(
      <div className="res-card m-4 p-4 w-[300px] bg-gray-200 rounded-lg hover:bg-slate-400">
        <img className="res-card-img w-[300px] h-[250px] rounded-lg" src={CDN_URL+resData.info.cloudinaryImageId} />
        <h3 className="font-bold py-4 text-xl">{resData.info.name}</h3>
        <h5>{resData.info.costForTwo}</h5>
        <h5>{resData.info.cuisines.join(', ')}</h5>
        <h4>{resData.info.avgRating} stars &#x2022; {resData.info.sla.deliveryTime} minutes</h4>
        <h5>User : {loggedInUser}</h5>
      </div> 
    )
  }   

export default RestaurentCard;            