import image from "../img/logo.png";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import UserContent from "../utilis/UserContent";
import {useContext} from "react"; 
//reading data from store
import { useSelector } from "react-redux";//bridge b/w react and redux

const Header=function(){  
    const cartItems=useSelector((store)=>store.cart.items);//useSelector can access store
    const [btnName,setBtnName]=useState("Login");

    const {loggedInUser}=useContext(UserContent);
    return ( 
        <div className="header container ">
            <div className="logo-container"> 
            <img className="logo" src={image}></img>
            </div>
          
            <div className="nav-items">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/contact" className="link">contact Us</Link></li>
                    <li><Link to="/about" className="link">About Us</Link></li>
                    <li><Link to="/cart" className="link">Cart-{"( "+cartItems.length+" )"}</Link></li>
                    
                <button className="login" onClick={()=>{
                 setBtnName((btnName==="Login")?"Logout":"Login");
                   
                }}> {btnName}</button>
                <li className="user"  >{loggedInUser}</li>
                </ul> 
             
            </div>
        </div>
     )
};
export default Header;