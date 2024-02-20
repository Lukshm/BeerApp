import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import { Button } from 'react-native-ui-lib'
import beerweryLogo from './../assets/beerwery-logo.png'


const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={beerweryLogo} style={styles.image}/>
            <Button
            style={styles.button}
            label='INGRESAR'
            labelStyle={styles.buttonText}
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
      width: 200,
      height: 50,
      backgroundColor: '#EDB332',

    },
    buttonText: {
      color: '#000',
      fontWeight: 'bold',
  
    },
  })

export default LandingScreen