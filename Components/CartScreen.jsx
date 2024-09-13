import { StyleSheet, Text, View,Image, Pressable ,ScrollView} from 'react-native'
import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext';
import MovableCard from './MovableCard';



const CartScreen = () => {
  const {cart,setCart}=useContext(ProductContext);
    if(cart.length==0){
      return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{fontSize: 19,fontWeight: 'bold'}}>Cart is Empty</Text>
        </View>
      )
    }
  return (
    
    <View >
      <ScrollView>
      {
        cart.map((item,index)=>(
          
            <MovableCard item={item}/>
            
        ))
      }
      </ScrollView>
    </View>
    
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
     
     flexDirection: 'row',
     width: 'auto',
     height: 'auto',
     margin: 12,
     backgroundColor: 'white',//added this because react native was giving warning that shadow is not being able to calculate properly
     padding: 6,
     borderRadius: 8,
     shadowColor: 'rgba(0,0,0,0.24)',
     shadowOffset: {width: 0,height: 3},
     shadowOpacity: 1,
     shadowRadius: 8,
     elevation: 4,
  },
  btn: {
    backgroundColor: 'red',
    width: '30%',
    justifyContent: 'center',
    alignItems : 'center',
    borderRadius: 8,
    height: 30
,
 }
})