import { View, ImageBackground, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/Home';
import { StatusBar } from 'expo-status-bar';
import styles from './src/styles'

const image = {uri: 'https://i.pinimg.com/736x/7a/d0/02/7ad00221578040669540e93b7ffc9202.jpg'}

export default function App() {
  const Stack = createNativeStackNavigator()

  // ?  --> IT CHECKS IF THE DATA EXISTS. Because it will render before the FETCH, it should 
  // only render when the variable is set

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={image} style={styles.container}>
          <SafeAreaView style={styles.container}> */}
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
            <StatusBar style="auto" />
          {/* </SafeAreaView>
        </ImageBackground>
      </View> */}
    </NavigationContainer>
  );
}