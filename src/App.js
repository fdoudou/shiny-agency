import { useEffect, useReducer,useRef,useState } from "react";
import { Routes,Route } from "react-router-dom";
import { MyContext } from "./Contextor";
import "./style.css";

import aloe1 from "./images/aloe-1_upscaled.png";
import aloe2 from "./images/aloe-2_upscaled.png";
import aloe3 from "./images/aloe-3_upscaled.png";
import aloe4 from "./images/aloe-4_upscaled.png";
import aloe5 from "./images/aloe-5_upscaled.png";
import aloe6 from "./images/aloe-6_upscaled.png";
import aloe7 from "./images/aloe-7_upscaled.png";
import aloe8 from "./images/aloe_upscaled.jpeg";
//import * as img from "./images";

import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Nopage from "./Nopage";
import Layout from "./Layout";
import Cart from "./Cart";
import Footer from "./Footer";
import Checkout from "./Checkout";

export default function App(props) {

    let frontPlant = [
        {
            id:0,
            name:"aloe a",
            price:6000,
            category:"plantes-mixtes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3
            ]
        },
        {
            id:1,
            name:"aloe b",
            price:9800,
            category:"plantes-interieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe2,
                aloe2,
                aloe2,
                aloe2
            ]
        }
    ]

    let plantlist = [
        
        {
            id:2,
            name:"aloe c",
            price:3500,
            category:"plantes-interieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3
            ]
        },
        {
            id:3,
            name:"aloe d",
            price:4000,
            category:"plantes-mixtes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe4,
                aloe4,
                aloe4,
                aloe4
            ]
        },
        {
            id:4,
            name:"aloe e",
            price:3500,
            category:"plantes-mixtes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe5,
                aloe5,
                aloe5,
                aloe5
            ]
        },
        {
            id:5,
            name:"aloe f",
            price:3000,
            category:"plantes-exterieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe6,
                aloe6,
                aloe6,
                aloe6
            ]
        },
        {
            id:6,
            name:"aloe g",
            price:5500,
            category:"plantes-exterieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe7,
                aloe7,
                aloe7,
                aloe7
            ]
        },
        {
            id:7,
            name:"aloe h",
            price:3500,
            category:"plantes-interieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe8,
                aloe8,
                aloe8,
                aloe8
            ]
        },
        {
            id:8,
            name:"aloe i",
            price:6000,
            category:"plantes-exterieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe7,
                aloe7,
                aloe7,
                aloe7
            ]
        },
        {
            id:9,
            name:"aloe j",
            price:5000,
            category:"plantes-exterieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe1,
                aloe1,
                aloe1,
                aloe1
            ]
        },
        {
            id:10,
            name:"aloe k",
            price:3500,
            category:"plantes-interieurs",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe5,
                aloe5,
                aloe5,
                aloe5
            ]
        }
    ]

    const allPlant = [...frontPlant,...plantlist];

    function viewCart (target) {
        if (document.querySelector(target).className === 'modal-parent') {
            document.querySelector(target).className = 'jma-show';
        }   else {
            document.querySelector(target).className = 'modal-parent';
        }
    }
    
    let cstate = localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart'));
    
    const [cart,setCart] = useState(cstate);

    const inCart = (id) => {
        for (let c = 0; c < cart.length; c++) {
            if (id === cart[c].item) {
                return true;
            }
        }
        return false;
    }

    const addToCart = (id,qty) => {
        for (let c = 0; c < cart.length; c++) {
            if (id === cart[c].item) {
                return;
            }
        }
        setCart([...cart,{"item":id,"qty":qty}]);
    }

    const removeFromCart = (id) => {
        const oldCart = [...cart];
        for (let c = 0; c < oldCart.length; c++) {
            if (cart[c].item === id) {
                oldCart.splice(c,1);
                setCart([...oldCart]);
                return;
            }
        }
        // oldCart.splice(id,1);
        // setCart([...oldCart]);
    }

    useEffect (
        ()=>{
            localStorage.setItem('cart',JSON.stringify([...cart]));
        },[cart]
    )

    const updateQty = (id,action) => {
        let oldCart = [...cart];
        
        if (action === "ADD_ONE") {
            oldCart[id].qty = oldCart[id].qty + 1;
        } else if (action === "MINUS_ONE") {
            oldCart[id].qty = oldCart[id].qty > 1? oldCart[id].qty - 1: 1;
        }
        setCart([...oldCart]);
    }

    return (
            <MyContext.Provider value={{allPlant,plantlist,frontPlant,cart,addToCart,removeFromCart,updateQty,viewCart,inCart}}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}>
                        
                        </Route>
                        <Route path="category/:category" element={<Category/>}>
                        
                        </Route>
                        <Route path="category" element={<Category/>}>
                        
                        </Route>
                        <Route path="product/:id" element={<Product/>}>
                        
                        </Route>
                        <Route path="cart" element={<Cart/>}>
                        
                        </Route>
                        <Route path="*" element={<Nopage/>}>
                        
                        </Route>
                        <Route path="checkout" element={<Checkout/>}>
                        
                        </Route>
                    </Route>
                </Routes>
            </MyContext.Provider>
    )
}