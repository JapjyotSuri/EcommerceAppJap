import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrdersScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 18,fontWeight: 'bold'}}>Orders Screen</Text>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})