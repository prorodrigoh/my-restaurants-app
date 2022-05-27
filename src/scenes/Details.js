import { useContext, useState } from 'react'
import { View, Text, Image, ActivityIndicator, Button } from 'react-native'
import { SingleRestContext } from '../../App'
import styles from '../styles'

export default function Details(){
    const [isRated, setIsRated] = useState(false)
    const { currentRest, setCurrentRest, ratingsUpdated, setRatingsUpdates } = useContext(SingleRestContext)

    const handleRating = (newRating) => {
        setIsRated(true)
        setRatingsUpdates(!ratingsUpdated)

        fetch(`https://my-first-firestore-rh.web.app/restaurants/${currentRest.id}/rating`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({rating: newRating}),
        })
            .then(res => res.json())
            .then(data => setCurrentRest(data))
            .catch(console.error)
    }

    return (
        <View style={styles.card}>
            { !currentRest
                ? <ActivityIndicator />
                : ( <>
                    <Image source={{ uri: currentRest.image }} 
                            style={{ width: '100%', height: 240}}/>
                    <Text style={styles.name}>{currentRest.name}</Text>
                    <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
                    <Text style={styles.address}>{currentRest.address}</Text>
                    <Text style={[styles.address, { fontWeight: '700'}]}>
                        Rating: {currentRest.rating.toFixed(3)}</Text>
    
                    <Text style={styles.address}>My Rating:</Text>
                    <View style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'space-evenly',
                        paddingVertical: 24,
                        }}>
                        <Button disabled={true} onPress={() => handleRating(1)} title="1" />
                        <Button onPress={() => handleRating(2)} title="2" />
                        <Button onPress={() => handleRating(3)} title="3" />
                        <Button onPress={() => handleRating(4)} title="4" />
                        <Button onPress={() => handleRating(5)} title="5" />
                    </View>
                    </>
                  )
            }
        </View>

    )
}