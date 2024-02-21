import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'
import { GlobalProvider } from '../src/context/Global'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      
      <GlobalProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackNavigator/>
      </GestureHandlerRootView>
      </GlobalProvider>

    </NavigationContainer>

  );
}



export default App