import React from 'react'
import { View, ScrollView } from 'react-native'
import Card from './Card'


const Cards = ({ navigation }) => {
  

  return (
    <View>
      <ScrollView>
                <Card/>
      </ScrollView>
    </View>
  )
}

export default Cards