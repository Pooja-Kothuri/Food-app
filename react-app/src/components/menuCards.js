import cdn_link from "../utilis/constants";
import {useDispatch} from "react-redux";
import { addItem } from "../utilis/slices/cartSlice";
const MenuCard=(prop)=>{

    const dispatch=useDispatch();
    //console.log(dispatch)
    const handleAddItem=(props)=>{
        dispatch(addItem(props));//dispatch makes an object that has a payload keyword and value as passed value and it is passed to action
    };
    const {props}=prop;
    const {name,imageId,price}=props.card.info;
    return(
        <div className="menuCard">
           <div>
            <h3>{name}</h3>
            <span>{price/100}</span>
           </div>
        <div className="restroImage-container">
         <img className="restroImage" src={cdn_link+imageId}></img>
         <button className="addBtn"  onClick={()=>handleAddItem(props)}>Add +</button>
         </div>
        </div>
     
    )
}
export default MenuCard;