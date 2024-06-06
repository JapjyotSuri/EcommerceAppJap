import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import Homescreen from './Homescreen';

const CategoriesScreen = ({navigation}) => {
    const {categories,setCategorySelection}=useContext(ProductContext);
    
  return (
    <View style={{flexDirection: 'row' ,flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center'}}>
      {
        categories.map((category,index)=>(
            <Pressable key={index} style={styles.container} onPress={()=>{
              setCategorySelection(category);
              navigation.navigate('Home Screen');
              
            }}>
                <Text style={{color: 'white',fontSize: 18}}>{category}</Text>
            </Pressable>
        ))
      }
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
        margin: 12,
        backgroundColor: '#192A56',//added this because react native was giving warning that shadow is not being able to calculate properly
        padding: 6,
        borderRadius: 8,
        height: 150,
        width: 150,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {width: 0,height: 3},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4,
    }
})