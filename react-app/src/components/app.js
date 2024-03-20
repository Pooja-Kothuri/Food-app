import React from  "react";
import Body from "./body";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import ReactDom from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import UserContent from "../utilis/UserContent";
import {useContext} from "react"; 
import {useState,useEffect} from "react";
import { Provider } from "react-redux";
import appStore from "../utilis/appStore";
import Cart from "./cart";
/*
header
 -logo
 -items
body
-search
-restaurant container
  -restro cards

footer
*/
//creating html elements with react components

const AppLayout=()=>{
    const [userName,setName]=useState();
    useEffect(()=>{
        //api call to backend to fetch username
        user={
            name:"Pooja"
        }
        setName(user.name);
    },[])
    return (
        <Provider store={appStore}>
        <UserContent.Provider value={{loggedInUser:userName ,setName}}> 
        <div className="app">
            <Header />
            <Outlet/>
        </div>
        </UserContent.Provider>
        </Provider>
    )
}

//routing 

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/RestaurantMenu/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },
   
]);
const root=ReactDom.createRoot(document.getElementById("root"));
//to render a functional component place the name of component in <name/> in angular brackets
root.render(<RouterProvider router={appRouter}/>);