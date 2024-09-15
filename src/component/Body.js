import RestaurentCard from "./RestaurentCard";
import { useState, useEffect, useContext} from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () =>{
    // Local State Variable - Super powerful variable
    const [listOfRestaurents, setListofRestaurents] = useState([]); 
    const [filteredRestaurent, setFilteredRestaurent] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
      console.log("useEffect Called");
      fetchData();
    },[])

    const fetchData = async()=>{  
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 

      const json = await data.json();
      console.log(json); 
      // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setListofRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return( 
        <h1>Looks like you're offine!! Please check your internet connection.</h1>
      );
   
    // Conditional Rendering
    // if(listOfRestaurents.length===0){
    //   return <ShimmerUI />
    // }

    const {loggedInUser, setUserName} = useContext(UserContext)
    
    return listOfRestaurents.length===0 ? <ShimmerUI /> : (
      <div className='body'>
        <div className='filter flex'>
          <div className="search m-4 p-4">
            <input type="text" className="border border-black" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button className="px-2 py-1 mx-2 bg-green-300 border rounded-md" onClick={()=>{
              //Filter the restaurent cards and update the UI
              //searchText
              console.log(searchText);

              const filteredRestaurent = listOfRestaurents.filter(
                (resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
              // setListofRestaurents(listOfRestaurents);
            }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button className="px-3 py-2 bg-emerald-200 rounded" onClick={()=>{
              // Filter logic here
              const filteredList = listOfRestaurents.filter(
                (resData)=>resData.info.avgRating>4.2
              );
              setListofRestaurents(filteredList); 
            }}> 
              Top Rated Restaurents 
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName  </label>
            <input className="border border-black p-1 m-2"
              value={loggedInUser}
              onChange={(e)=>setUserName(e.target.value)}
             />
          </div>  
          
        </div>  
        <div className='res-container flex flex-wrap'>
          {
            filteredRestaurent.map((restaurant)=>(
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard resData={restaurant}/></Link>
            ))
          }      
        </div>
      </div>
    )
  }   

export default Body;            