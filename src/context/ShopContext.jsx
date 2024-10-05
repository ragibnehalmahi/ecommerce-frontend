import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
export const ShopContext = createContext();

const ShopContextProvider =(props) =>{
    
    const currency ='$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    const addToCart = async (itemId,size) =>{
        if(!size) {
            toast.error('select product size');
            return;
        }
        
        
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
         if (cartData[itemId][size]){
            cartData[itemId][size] += 1;
         } else{
            cartData[itemId][size]=1;
         }
        }
        else{
            cartData[itemId]={};
                cartData[itemId][size] = 1;
            }
            setCartItems(cartData);
        }
    
    
        const getCartCount = () => {
            let totalCount = 0;
            
            // Loop through each item in cartItems object
            for (const items in cartItems) {
              for (const item in cartItems[items]) {
                try {
                  // Check if the value of the item is greater than 0 and add to totalCount
                  if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                  }
                } catch (error) {
                  console.error('Error processing item:', error);
                }
              }
            }
            
            return totalCount; // Return totalCount after the loops complete
          };
      const updateQuantity = async (itemId,size,quantity) => {
       let cartData = structuredClone(cartItems);
       cartData[itemId][size] =quantity;
       setCartItems(cartData);

      }   
      const getCartAmount = () => {
        let totalAmount = 0;
      
        // Loop through each item in cartItems
        for (const items in cartItems) {
          // Find the product object instead of its index
          let itemInfo = products.find((product) => product._id === items);
      
          // Ensure the product exists before proceeding
          if (itemInfo) {
            for (const item in cartItems[items]) {
              try {
                // Check if the item quantity is greater than 0
                if (cartItems[items][item] > 0) {
                  // Calculate totalAmount by multiplying the price with the quantity
                  totalAmount += itemInfo.price * cartItems[items][item];
                }
              } catch (error) {
                console.error('Error calculating item amount:', error);
              }
            }
          }
        }
      
        // Return totalAmount after all items are processed
        return totalAmount;
      };
      
       
    
    const value ={
   products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,
    getCartCount ,updateQuantity ,getCartAmount,navigate


    }


    return(
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;