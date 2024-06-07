import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React, { useContext } from 'react'


const ProfileScreen = ({navigation}) => {
  
  return (

    <View style={styles.mainContainer}>
      <View style={{marginLeft: 10,alignItems: 'flex-start'}}>
      <Text style={{fontSize: 26,fontWeight: 'bold'}}>Hey! Japjyot,</Text> 
      
      </View>
      <View style={{alignItems: 'center'}}>
      <Image style={{height: 200,width: 200,borderRadius: 100,marginTop: 20,marginBottom: 20}} source={require('../Japjyot_profile.jpg')}/>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20,fontWeight: 'bold'}}>Japjyot Suri</Text>
      <Text style={{fontSize: 20,fontWeight: 'bold'}}>japjyot.suri@geekyants.com</Text>
      </View>
      </View>
      <View>

      </View>
      <View style={{flex: 1,alignItems: 'center' ,gap: 10,marginTop: 30,marginBottom: 20}}>
      <View style={{justifyContent: 'center',alignItems: 'flex-end' ,gap: 10,marginTop: 10,}}>
        <Pressable style={[styles.btn,{backgroundColor: '#30ABE2'}]} onPress={() => {navigation.navigate('Orders')}}><Text style={{color: 'white',fontWeight: 'bold'}}>Your Orders</Text></Pressable>
        <Pressable style={[styles.btn,{backgroundColor: '#09599A'}]} onPress={() => {navigation.navigate('Cart')}}> 
          <Text style={{color: 'white',fontWeight: 'bold'}}>Your Cart</Text>
        </Pressable>
        <Pressable style={[styles.btn,{backgroundColor: '#103457'}]} onPress={() => {navigation.navigate('Settings')}}> 
          <Text style={{color: 'white',fontWeight: 'bold'}}>Account Settings</Text>
        </Pressable>
      </View>

      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  btn: {
    backgroundColor: '#192A56',
    width: 200,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})