import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/Home';
import Details from './src/scenes/Details';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator()

export const SingleRestContext = createContext(null)

export default function App() {
  const [currentRest, setCurrRest] = useState()

  return (
    <SingleRestContext.Provider value={{currentRest, setCurrRest}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{ title: 'Local Restaurants'}}/>
          <Stack.Screen name='Details' component={Details} options={{ title: 'Restaurant detail'}}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SingleRestContext.Provider>
  );
}