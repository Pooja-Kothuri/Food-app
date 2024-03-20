import {RestroCard} from "./restroData";
import restaurants from "../utilis/data";
import {useState,useEffect,useContext} from "react";
import Shimmer from "./shimmerUI";
import { Link } from "react-router-dom";
import UserContent from "../utilis/UserContent";
const fetchDataFromApi=async ()=>{
    try{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4385553&lng=79.1288412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
   return json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
    catch{
        console.log("error in fetching data");
        return [];
    }
};
const Body=()=>{
    //local state variable
   const {loggedInUser,setName}=useContext(UserContent);
    const [originalList,setOriginalList]=useState([]);
    const [listOfRestaurant,setListOfRestuarant]=useState([]);//passing default array
    const [searchText,setSearchText]=useState("");
    const [inputName,setInputName]=useState("");
    //useEffect : body is rendered ->api call-> after getting data body is rerendered
    useEffect(  ()=>{
        console.log("rendered after component/body is loaded");
        const list=fetchDataFromApi().then((lis)=>{ setOriginalList(lis); setListOfRestuarant(lis);console.log(lis) });
        },[]);
    if(originalList?.length===0){
      return  <Shimmer/> 
    }
    return (
    <div className="container ">
      <h2>{loggedInUser},what's in your mind?</h2>
       <div className="search">
       {//to make search value available to button statevariables are used
       } 
        <input type="search" className="search-bar" value={searchText} onChange={(e)=>{
           
          setSearchText(e.target.value);
         
        }}></input>

        <input type="submit"className="find-search" value="search" onClick={()=>{
            const searchFilterList=originalList.filter((item)=>{
                return item.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setListOfRestuarant(searchFilterList);
        }}></input>
 
        <button className="rate" onClick={()=>{ const filtered=originalList.filter((restra)=> restra.info.avgRating>4.1);
            
             setListOfRestuarant(filtered);//to modify listofRestaurant
        }}>top rated</button>
        <input type="text" placeholder="enter u r name"  className="search-bar"  value={loggedInUser}
        onChange={(e)=>{
          setName(e.target.value);
        }}>

        </input>
       </div>

       
       <div className="restro-container">
        {
            listOfRestaurant.map((restaurant)=>{ 
              return (<Link key={restaurant.info.id} to={"/RestaurantMenu/"+restaurant.info.id}><RestroCard resName={restaurant}/></Link>)
            })
           
        }  
       </div>

    </div>)
}
export default Body;