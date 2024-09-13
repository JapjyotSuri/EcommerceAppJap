import { Pressable, StyleSheet, Text, View,Image, Dimensions} from 'react-native'
import React, { useContext } from 'react'
import Animated, { clamp, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import ProductContext from '../Context/ProductContext';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'
const {width}=Dimensions.get('window');
const MovableCard = ({item}) => {
    const {cart,setCart}=useContext(ProductContext);
    const translationX=useSharedValue(0)
    const prevTranslationX=useSharedValue(0)
    const animatedStyle=useAnimatedStyle(() => ({
        transform: [{ translateX: translationX.value }],
    }))

    function removeCart(){//removing item from cart
       const newCart=cart.filter((product) => (
        product.id !== item.id
       ))
       setCart(newCart)
    }
    const pan=Gesture.Pan().onStart(() => {
        prevTranslationX.value=translationX.value
    }).onUpdate((event) => {
        const maxTranslateX = width / 2 - 50;
        translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
    );
    }).onEnd(() => {
        if(translationX.value < -130){
            runOnJS(removeCart)()
            translationX.value=withSpring(0)
        }
        else{
            translationX.value=withSpring(0)
        } 
    })
  return (
    <GestureDetector gesture={pan}>
        <View>
    <View style={{position: 'absolute',zIndex: -1,width: '87%',backgroundColor: 'red',alignItems: 'flex-end',marginLeft: 12,marginTop: 20,right: 25,height: 100,justifyContent: 'center',borderRadius: 8,paddingRight: 20}}>
        
        <AntDesign name='delete' size={40} style={{color: 'white'}}/>
    </View>
    <Animated.View style={[styles.container,animatedStyle]}> 
    <View>
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
      </Animated.View>
      </View>
      </GestureDetector>
  )
}

export default MovableCard

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