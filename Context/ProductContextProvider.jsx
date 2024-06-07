import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'

const ProductContextProvider = ({children}) => {
    const [products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [categories,setCategories]=useState([]);
    const [cart,setCart]=useState([]);
    const [categorySelection,setCategorySelection]=useState('all');
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(()=>{
        async function fetchData(){
        setIsLoading(true);
        try{
        
            
            const res=await fetch('https://fakestoreapi.com/products');
            const data=await res.json();
            setProducts(data);
            // console.log(products);
            const cateres=await fetch('https://fakestoreapi.com/products/categories');
            const catedata=await cateres.json();
            setCategories(catedata);
            // console.log(data);
        }
    
    catch(error){
      
    }
    finally{
        setIsLoading(false);
        
    }
}
    fetchData();
},[])
  return (
   <ProductContext.Provider value={{products,categories,cart,setCart,isLoading,categorySelection,setCategorySelection,isModalVisible, setIsModalVisible}}>
      {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider

