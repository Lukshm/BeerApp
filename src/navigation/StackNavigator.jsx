import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import Favorites from '../screens/Favorites';
import Logo from '../assets/Beerwery.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 200, height: 50, alignContent: 'center', resizeMode: 'contain' }}
      source={Logo}
    />
  );
};

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: 'center',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Icon name="star" size={25} color="#EDB332" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name='LandingScreen'
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name='Favorites' component={Favorites} />
    </Stack.Navigator>
  );
};

export default StackNavigator;