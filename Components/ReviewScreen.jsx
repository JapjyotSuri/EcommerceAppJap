import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ReviewScreen = ({id,rating}) => {
    const {setIsModalVisible} = useContext(ProductContext);
  return (

    <View style={{height: '100%'}}>
        <View style={{alignItems: 'center'}}>
         <Text style= {{fontSize: 28, fontWeight: 'bold'}}>Reviews</Text>
         </View>
         <View style={{alignItems: 'center',marginTop: 10}}>
        <Pressable style={{backgroundColor: 'green', padding: 5,borderRadius: 8}}>
         
         <Text style= {{fontSize: 19, fontWeight: 'bold',color: 'white'}}><AntDesign
          name="staro"
          size={20}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.toggleDrawer()}
        /> {rating.rate} | {rating.count}</Text>
        
         </Pressable>
         
         </View>
         <View>
            <View style={styles.card}>
            <Text style={{fontSize: 17,fontWeight: 'bold',marginBottom: 10 , color: 'green'}}>Excellent Quality</Text>
            <Text>I am thoroughly impressed with the quality of this product. The materials used are top-notch, and the craftsmanship is evident. It's durable, reliable, and has exceeded my expectations in every way. Highly recommend!</Text>
            </View>
            
         </View>
         
         <View>
            <View style={styles.card}>
            <Text style={{fontSize: 17,fontWeight: 'bold',marginBottom: 10, color: 'green'}}>Great Value for Money</Text>
            <Text>This product offers exceptional value for the price. It's affordable yet doesn't compromise on quality. The features and performance are comparable to much more expensive brands. I'm extremely satisfied with my purchase</Text>
            </View>
            
         </View>
         <View>
            <View style={styles.card}>
            <Text style={{fontSize: 17,fontWeight: 'bold',marginBottom: 10, color: '#808080'}}>Decent Product, But Some Improvements Needed</Text>
            <Text>Overall, this product is decent and performs its intended function well. However, there are a few areas that could use improvement. The design is a bit outdated, and I wish it had more advanced features. Still, it's a solid choice for the price.</Text>
            </View>
            
         </View>
         <View>
            <View style={styles.card}>
            <Text style={{fontSize: 17,fontWeight: 'bold',marginBottom: 10, color: 'red'}}>Disappointed with the Quality</Text>
            <Text>I was disappointed with the quality of this product. It feels flimsy and doesn't seem to be built to last. I expected more durability and better materials for the price I paid. I wouldn't recommend this to others.</Text>
            </View>
            
         </View>
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'flex-end' }}>
         
          <View style={{backgroundColor: 'white',justifyContent: 'center'}}>
          <Pressable style={styles.btn} onPress={() => { setIsModalVisible(false) }}>
            <Text style={{color: 'white',fontWeight: 'bold',fontSize: 18}}>Close</Text>
          </Pressable>
          </View>
        </View>
        </View>

  )
}
{/* <View style={{ justifyContent: 'center',height: '80%',alignItems: 'center'}}>
         <View >
            <Text style={{fontSize: 24,}}>Reviews about the product.......</Text>
           
         </View>
         </View> */}

export default ReviewScreen

const styles = StyleSheet.create({
    btn: {
        height: 50,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      card: {
     
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
      }
})