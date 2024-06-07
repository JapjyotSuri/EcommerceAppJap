import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProductDetailsScreen from './ProductDetailsScreen';
import ProductCard from './ProductCard';
import ProductContext from '../Context/ProductContext';

const Homescreen = ({ navigation }) => {

  const { products, categories, categorySelection } = useContext(ProductContext);
  const [categoryOutput, setCategoryOutput] = useState(products);//to set the output when the top buttons are clicked to filter data
  function handlePress(category) {
    const newpro = products.filter((product) => {
      return product.category === category;
    })
    setCategoryOutput(newpro);
  }
  useEffect(() => {
    const newpro = products.filter((product) => {//filtering out products that have a particular category
      return product.category === categorySelection;
    })
    setCategoryOutput(newpro);

  }, [categorySelection])
  useEffect(() => {
    setCategoryOutput(products);//this I did as without this it gives empty output s fetcjing info from api takes time and this used to take products as []
  }, [products])
  return (

    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 50, marginTop: 10 }}>
        <ScrollView horizontal={true}>
          <Pressable style={{ backgroundColor: '#192A56', height: 40, borderRadius: 8, width: 30, justifyContent: 'center', alignItems: 'center', marginRight: 10, padding: 5, marginLeft: 10, }} onPress={() => setCategoryOutput(products)}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>All</Text>
          </Pressable>

          {
            categories.map((category, index) => (
              <Pressable key={index} style={{ backgroundColor: '#192A56', height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10, padding: 5, }} onPress={() => handlePress(category)}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>{category}</Text>
              </Pressable>
            ))
          }
        </ScrollView>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%', gap: -10 }}>
        {
          categoryOutput.map((product) => {
            return <ProductCard key={product.id} {...product} navigation={navigation} />
          })
        }
      </View>
    </ScrollView>

  )

}

export default Homescreen

const styles = StyleSheet.create({})