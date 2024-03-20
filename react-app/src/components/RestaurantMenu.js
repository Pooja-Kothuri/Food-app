import {useState,useEffect} from 'react';
import Shimmer from './shimmerUI';
import {useParams} from "react-router-dom";
import { swiggy_link } from '../utilis/constants';           
import MenuDetails from "./menuDetails";


const RestaurantMenu=()=>{
  const {resId}=useParams();
   const [showItems,setShowItems]=useState(null);
  const [menu,setMenu]=useState(null);
  useEffect(()=> {
    fetchMenuApi();
},[]);

  const fetchMenuApi= async ()=>{
   try{ const data=await fetch(swiggy_link+resId);
    const json=await data.json();
    setMenu(json.data);//console.log(json.data);
  }
  catch{
    console.log("error");
  }
}  
//console.log(showItems);
if (menu === null) return "not rendered";
 const {avgRating,city,costForTwoMessage,cuisines,name,sla}=menu?.cards[0]?.card?.card?.info;
 const {cards}=menu.cards[2].groupedCard.cardGroupMap.REGULAR;
const itemCategory=menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>{
  return (
    item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
});
// console.log("1");
    return ( 
       <div className="container">
         <div className="restroInfo-container">
          <div className="card-0">
            <h3>{name}</h3> 
             <p>{cuisines?.join(", ")}</p> 
             <p>{city+" "+sla?.lastMileTravelString}</p>
             </div>
            
             <div className="card-1">
              <span>{sla?.slaString}</span> 
             <span>{costForTwoMessage}</span>
              </div>

              
             <div className="card-2">
             {  

               itemCategory.map((item,index)=>{
                return (
                    <MenuDetails key={index} props={item} 
                      showItems={(index==showItems)?true:false}
                      setShowItems={()=>{setShowItems(index)}}
                     
                      
                    />
                )
               })
             
             }
              </div>
        
         </div>
          
        
        </div>
        ) 
    
};

export default RestaurantMenu;