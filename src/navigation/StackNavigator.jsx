import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Image } from 'react-native'
import LandingScreen from '../screens/LandingScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import Logo from '../assets/Beerwery.png'
// import Favorites from '../screens/Favorites'


const Stack = createNativeStackNavigator()


const LogoTitle = () => {
    return(
        <Image
        
        style={{width: 200, height:50, alignContent: 'center', resizeMode: 'contain',}}
        source={Logo}
        
        />
    )
}

const StackNavigator = ()=>  {
  return (
    <Stack.Navigator
    screenOptions={{
        headerTitle: props => <LogoTitle{...props}/>,
        headerTitleAlign: 'center',
        headerTintColor: '#000',
        headerStyle:{
            backgroundColor: '#FFFFFF'
        }
    }}>

        
        <Stack.Screen 
        name='LandingScreen' 
        component={LandingScreen}
        options={{
            headerShown: false,
        }}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        {/* <Stack.Screen name='Favorites' component={Favorites}/> */}
        
        </Stack.Navigator>
        )
    }

export default StackNavigator