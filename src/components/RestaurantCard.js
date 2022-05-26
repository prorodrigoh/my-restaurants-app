import {View, Text, Image} from 'react-native';
import styles from '../styles';

export default function RestaurantCard({ restaurant }){
    return(
        <View style={styles.card}>
            <Text style={styles.name}>
                {restaurant.name}
            </Text>

            <Text style={styles.cuisine}>
                {restaurant.cuisine}
            </Text>

            <Text style={styles.address}>
                {restaurant.address}
            </Text>

            <Image source={ {uri: restaurant.image} } 
                style={{width: 100, height: 100}} 
            />
        </View>
    )
}
