import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator'
import { GlobalProvider } from '../src/context/Global'

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar style='auto'/>
      
      <GlobalProvider>
        <StackNavigator/>
      </GlobalProvider>

    </NavigationContainer>


  );
}



export default App