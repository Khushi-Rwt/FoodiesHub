import { CDN_URL } from "../utils/Constants";

const RestaurentCard = (props) => {
    // console.log(props);
    const {resData} = props;
    // const{cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} = resData;
    return(
      <div className="res-card">
        <img className="res-card-img" src={CDN_URL+resData.info.cloudinaryImageId} />
        <h3>{resData.info.name}</h3>
        <h5>{resData.info.costForTwo}</h5>
        <h5>{resData.info.cuisines}</h5>
        <h4>{resData.info.avgRating} stars &#x2022; {resData.info.sla.deliveryTime} minutes</h4>
      </div> 
    )
  }  

export default RestaurentCard;            