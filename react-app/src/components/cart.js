import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./menuCards";
import { UseDispatch } from "react-redux";
import { clearCart } from "../utilis/slices/cartSlice";
const Cart=()=>{
   const dispatch=useDispatch();
   
    const clearcart=()=>{
         dispatch(clearCart());
    }
    const cartItems=useSelector((store)=>store.cart.items);
   // console.log(cartItems)
    return (
        <div className="restroInfo-container">
            <div className="cartHeader">
            <h2>CartItems</h2>
            <button className="clearbtn" onClick={clearcart}>ClearCart</button>
            </div>
           

            {
                cartItems.map((items,index)=>{
                  return  <MenuCard key={index} props={items}/>
                })
            }
        </div>
    )
    
}

export default Cart;