import React, {useContext} from 'react'
import { View, ScrollView } from 'react-native'
import BreweryCard from '../components/Card'
import { GlobalStateContext } from '../context/Global'



const Cards = ({ navigation }) => {

  const {allBreweries} = useContext(GlobalStateContext)
console.log(allBreweries);
  return (
    <View>
      <ScrollView>
                {allBreweries.length && allBreweries.map(
                  (brewewy) =>
                  <BreweryCard brewery={brewewy}/>
                  
                )}
      </ScrollView>
    </View>
  )
}

export default Cards