import React from 'react'
import Cards from '../components/Card'
import { StyleSheet, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
            
            <Cards navigation={navigation} />
            <Cards navigation={navigation} />
            <Cards navigation={navigation} />
            <Cards navigation={navigation} />

        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
  })

export default HomeScreen