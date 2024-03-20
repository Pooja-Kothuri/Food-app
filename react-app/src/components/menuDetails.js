import MenuCard from './menuCards';
import {useState} from "react";
const MenuDetails=(prop)=>{
  
    // const handleShow=()=>{
    //     setShowItems(!showMenu);
    // }

    const handleShow=()=>{
       // console.log(prop)
        setShowItems();
    
    }
     
    const {props,showItems,setShowItems}=prop;//console.log(showItems);
    const {itemCards,title}=props.card.card;
    return(
        <div >
           <div className="title" onClick={handleShow}> <h3>{title+" ( "+itemCards?.length+" )"}</h3>
             <span>🔼</span> 
            </div>
            {
                showItems&& itemCards?.map((item)=><MenuCard key={item.card.info.id} props={item}/>)
            }
          <div className="border"></div>  
         </div>
                   
    )
}

export default MenuDetails;