import { useEffect, useState, useContext } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { SingleRestContext } from "../../App";
import RestaurantCard from "../components/RestaurantCard";

export default function Home ( {navigation} ) {
    const [allRestaurants, setAllRestaurants] = useState()
    const { setCurrRest } = useContext(SingleRestContext)

    useEffect (() => {
        fetch('https://my-first-firestore-rh.web.app/restaurants')
            .then(res => res.json())
            .then(setAllRestaurants)
            .catch(console.error)
    },[])

    const handlePress = (restaurant) => {
        setCurrRest(restaurant)
        navigation.navigate('Details')
    }

    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color='Orange' />
                : allRestaurants.map( restaurant => (
                    <TouchableOpacity  key={restaurant.id} onPress={() => handlePress(restaurant)}>
                        <RestaurantCard restaurant={restaurant} /> 
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}