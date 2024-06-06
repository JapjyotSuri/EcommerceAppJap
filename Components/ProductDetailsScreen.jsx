import { Image, Pressable, StyleSheet, Text, View, Modal, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductContext from '../Context/ProductContext';
import { ScrollView } from 'react-native-gesture-handler';
import ReviewScreen from './ReviewScreen';


const ProductDetailsScreen = ({ route, navigation }) => {
  const { id, title, price, category, description, image, rating } = route.params;
  const { cart, setCart ,isModalVisible,setIsModalVisible} = useContext(ProductContext);
  
  return (
    <ScrollView>
    {/* <SafeAreaView  style={styles.safeArea}> */}
      
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: image }} resizeMode='contain' />
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 22,marginBottom: 10 }}>{title}</Text>
        <View style={{ alignItems: 'flex-start', width: '100%' }}>

          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', marginBottom: 10}}> MRP: $ {price}</Text>
          {/* <Text>Rating: {rating.rate}</Text>
          <Text>Total Reviews: {rating.count}</Text> */}
        </View>

        
        {/* <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Category: {category}</Text> */}
        
        <View style={{height: 125}}>
        <ScrollView>
        <Text style={{ fontSize: 16, }}>{description}</Text>
        </ScrollView>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'flex-end', width: '100%', gap: 5 }}>
          <Pressable style={[styles.btn, { backgroundColor: '#74B9FF', width: '45%' }]} onPress={() => { setIsModalVisible(true) }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>See Reviews</Text>
          </Pressable>
          <Pressable style={[styles.btn, { backgroundColor: '#192A56', width: '45%' }]} onPress={() => {
            const updatedCart = [...cart, route.params];
            setCart(updatedCart)
            console.log(cart);
            navigation.navigate('Cart');
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>+ Add to Cart</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType='slide' presentationStyle='pageSheet'>

          <ReviewScreen {... route.params}/>

      </Modal>
      
    {/* </SafeAreaView> */}
    </ScrollView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,

  },
  mainContainer: {
    height: '100%',
    // marginRight: 6,
    justifyContent: 'flex-start',
    
  },
  imgContainer: {
    // justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    // // marginBottom: 10,
    // marginTop: -40

  },
  img: {
    height: 350,
    width: 350,
    // alignItems: 'center',
    borderRadius: 4,
    // shadowColor: 'rgba(0,0,0,0.24)',
    // shadowOffset: {width: 0,height: 3},
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // elevation: 4,

  },
  btn: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 8,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

})