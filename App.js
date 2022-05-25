import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

const image = {uri: 'https://i.pinimg.com/736x/7a/d0/02/7ad00221578040669540e93b7ffc9202.jpg'}

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  
  useEffect( () => {
    fetch('https://my-first-firestore-rh.web.app/restaurants')
      .then(response => response.json())
      .then(data => setAllRestaurants(data))
      .catch(console.error)
  },[])


  // ?  --> IT CHECKS IF THE DATA EXISTS. Because it will render before the FETCH, it should 
  // only render when the variable is set

  const list = allRestaurants?.map( restaurant => {
    return(
      <>
          <Text key={restaurant.id}  
                style={styles.restaurantsName}
          >{restaurant.name}</Text>

          <View style={styles.card}>
            <Image source={ {uri: restaurant.image} } 
                  style={{width: 100, height: 100}} 
            />
            <Button title='Order Now'/>
          </View>
      </>
    )

  })

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={image} style={styles.container}>
        <ScrollView>
          { allRestaurants
            ? (list)
            : (<ActivityIndicator size='large' color='red' />)
          }
        </ScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  restaurantsName: {
    color: '#ffffff',
    fontSize: 30,
    marginVertical: 50
  },
  card:{
    display: 'flex',
    alignItems: 'center'
  }
});
