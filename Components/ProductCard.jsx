import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDetailsScreen from './ProductDetailsScreen'

const ProductCard = ({id,title,price,category,description,image,rating,navigation}) => {
    
  return (
    <Pressable onPress={() =>{navigation.navigate('Product Details', { id, title, price, category, description, image ,rating})}}>
    <View style={styles.card}>
        <Image style={styles.img} source={{uri: image}} resizeMode='contain'/>
        <View style={styles.info}>
      <Text numberOfLines={3} style={{fontWeight: 'bold'}}>{title}</Text>
      <View style={{flex: 1,justifyContent: 'flex-end'}}>
      <Text>$ {price}</Text>
      </View>
      </View>
    </View>
    </Pressable>
  )
  
}

export default ProductCard

const styles = StyleSheet.create({
    img: {
        height: 125,
        width: '100%'
    },
    card: {
        margin: 12,
        backgroundColor: 'white',//added this because react native was giving warning that shadow is not being able to calculate properly
        padding: 6,
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {width: 0,height: 3},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4,
        width: 170,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 215
    },
    info: {
       marginTop: 10,
       flex: 1,
        justifyContent: 'space-between',
    }
})