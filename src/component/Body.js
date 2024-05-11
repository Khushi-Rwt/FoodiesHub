import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

const Body = () =>{
    // Local State Variable - Super powerful variable
    const [listOfRestaurents, setListofRestaurents] = useState([]); 

    useEffect(()=>{
      console.log("useEffect Called");
      fetchData();
    },[])

    const fetchData = async()=>{  
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 

      const json = await data.json();
      console.log(json); 
      // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setListofRestaurents(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }    
    console.log(listOfRestaurents)               

    // console.log("Body rendered"); 
    return(
      <div className='body'>
        <div className='filter'>
          <button className="filter-btn" onClick={()=>{
            // Filter logic here
            const filteredList = listOfRestaurents.filter(
              (resData)=>resData.info.avgRating>4.2
            );
            setListofRestaurents(filteredList); 
          }}> 
            Top Rated Restaurents 
          </button>
        </div>  
        <div className='res-container'>
          {
            listOfRestaurents.map((restaurant)=>(
              <RestaurentCard key={restaurant.info.id} resData={restaurant}/> 
            ))
            
          }     
          
        </div>
      </div>
    )
  }   

export default Body;            