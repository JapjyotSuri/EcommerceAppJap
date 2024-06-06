import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext';
import { ScrollView } from 'react-native-gesture-handler';


const CartScreen = () => {
    const {cart,setCart}=useContext(ProductContext);
    function removeCart(id){
       const newCart=cart.filter((item) => (
        item.id !== id
       ))
       setCart(newCart)
    }
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
          <View key={index} style={styles.container}> 
          <View >
          <Image style={{height: 100,width: 100}} source={{uri: item.image}} resizeMode='contain'></Image>
          </View>
          <View style={{ flex: 1,justifyContent: 'center',gap: 10}}>
            <Text style={{fontWeight: 'bold',fontSize: 16}}>{item.title}</Text>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginRight: 10, alignItems: 'center'}}> 
            <Text style={{fontWeight: 'bold',fontSize: 15}}>$ {item.price}</Text>
            <Pressable onPress={()=>{removeCart(item.id) }} style={styles.btn}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Remove</Text>
            </Pressable>
            </View>
            </View>
            </View>
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