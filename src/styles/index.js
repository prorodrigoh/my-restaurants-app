import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#00000080',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 0,
    },
    card:{
      width: '100%',
      marginVertical: 16,
      backgroundColor: '#fff',
      color: '#444',
      borderRadius: 4,
    },
    name: {
      marginHorizontal: 12,
      fontSize: 24,
      fontWeight: '600',
      marginTop: 15,
    },
    cuisine: {
      marginHorizontal: 12,
      fontSize: 16,
      fontWeight: '100',
      color: '#ff3333',
    },
    address: {
      marginHorizontal: 12,
      fontSize: 14,
      fontWeight: '300',
      color: '#303030',
      marginBottom: 8,
    },
  });
  