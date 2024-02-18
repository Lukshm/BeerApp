import React from 'react'
import {StyleSheet, View, Button, Image} from 'react-native'
import beerweryLogo from './../assets/beerwery-logo.png'


const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={beerweryLogo} style={styles.image}/>
            <Button
            style={styles.button}
            title='INGRESAR'
            onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 80
    },
    image: {
      height: 250,
      width: '100%',
      marginBottom: 30,
      resizeMode: 'contain',
      aspectRatio: 1,
      alignItems: 'center'
    },
    button: {
      fontWeight: 'bold',
      color: '#999',
      alignItems: 'center',
      width: '50%',
      height: '60%'

    }
  })

export default LandingScreen