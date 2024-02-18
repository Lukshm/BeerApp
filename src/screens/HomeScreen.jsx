import React from 'react'
import Card from '../components/Card'
import { StyleSheet, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
            
            <Card navigation={navigation} />

        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e4f2ff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
  })

export default HomeScreen