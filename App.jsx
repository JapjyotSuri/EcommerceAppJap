import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from './Components/Homescreen';
import ProductDetailsScreen from './Components/ProductDetailsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { enableScreens } from 'react-native-screens';
import ProductContextProvider from './Context/ProductContextProvider';
import CategoriesScreen from './Components/CategoriesScreen'
import CartScreen from './Components/CartScreen'
import ProfileScreen from './Components/ProfileScreen'
import OrdersScreen from './Components/OrdersScreen'
import SettingsScreen from './Components/SettingsScreen'
import AntDesign from 'react-native-vector-icons/AntDesign';


enableScreens();//This is used to optimise the performance and memory usage of the app while navigating from one page to another


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const Homestack = ({ navigation }) => (

  <Stack.Navigator initialRouteName='Home Screen' screenOptions={{
    headerStyle: {
      backgroundColor: '#192A56',
    },
    headerTintColor: 'white',
  }}>

    <Stack.Screen name='Home Screen' component={Homescreen}
      options={{
        headerLeft: () => (
          <AntDesign
            name="menuunfold"
            size={25}
            backgroundColor="transparent"
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        )
      }}
    />
    <Stack.Screen name='Product Details' component={ProductDetailsScreen} options={{
      headerLeft: () => (
        <AntDesign
          name="menuunfold"
          size={25}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    }} />

  </Stack.Navigator>


)

const Tabnav = ({ navigation }) => (
  <Tab.Navigator //parent navigator of stack and child navigator of drawer
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: '#192A56'
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home'
        }
        else if (route.name === 'Categories') {
          iconName = 'appstore-o'
        }
        else if (route.name === 'Cart') {
          iconName = 'shoppingcart'
        }
        return <AntDesign name={iconName} size={size} color={color} />;
      },
      tabBarInactiveTintColor: 'white',
      headerStyle: {
        backgroundColor: '#192A56'
      },
      headerTintColor: 'white'
    }
    )}

  >
    <Tab.Screen
      name='Home'
      component={Homestack}
      options={{
        headerShown: false,

        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            }}
          />
        ),

      }}
    />
    <Tab.Screen name='Categories' component={CategoriesScreen} options={{
      headerLeft: () => (
        <AntDesign
          name="menuunfold"
          size={25}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    }}></Tab.Screen>

    <Tab.Screen name='Cart' component={CartScreen} options={{
      headerLeft: () => (
        <AntDesign
          name="menuunfold"
          size={25}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),


    }}></Tab.Screen>
  </Tab.Navigator>
)

const Drawernav = ({ navigation }) => ( //parent navigator
  <Drawer.Navigator>
    <Drawer.Screen name='HomeScreen' component={Tabnav} options={{
      headerShown: false
      , headerLeft: () => (
        <AntDesign
          name="menuunfold"
          size={25}
          backgroundColor="transparent"
          color="#000"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    }} />
    <Drawer.Screen name='Profile' component={ProfileScreen} options={{
      headerStyle: {//setting backgroun color blue and font color as white
        backgroundColor: '#192A56'
      },
      headerTintColor: 'white'
    }} />
    <Drawer.Screen name='Orders' component={OrdersScreen} options={{
      headerStyle: {//setting backgroun color blue and font color as white
        backgroundColor: '#192A56'
      },
      headerTintColor: 'white'
    }} />
    <Drawer.Screen name='Settings' component={SettingsScreen} options={{
      headerStyle: {//setting backgroun color blue and font color as white
        backgroundColor: '#192A56'
      },
      headerTintColor: 'white'
    }} />
  </Drawer.Navigator>)



const App = () => {
  return (
    
    <ProductContextProvider>
      <NavigationContainer>
        <Drawernav />
      </NavigationContainer>
    </ProductContextProvider>
    

  )
}

export default App

const styles = StyleSheet.create({})