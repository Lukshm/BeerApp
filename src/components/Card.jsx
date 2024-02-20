import React, {useContext} from 'react';
import { View, Text, StyleSheet, Touchable } from 'react-native';
import { Card, Button } from 'react-native-ui-lib';
import { GlobalStateContext } from '../context/Global';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const BreweryCard = ({brewery, navigation}) => {

  const detailNavigation = useNavigation();

  const handlePress = () => {
    detailNavigation.navigate('DetailScreen', {brewery: brewery})
  }
  
  return (
    
    
    <TouchableOpacity onPress={handlePress}>
    <Card
    borderRadius={12}
    style={styles.card}
   
    >
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{brewery.name}</Text>
          <Text style={styles.cityText}>{brewery.city}</Text>
          <Text style={styles.countryText}>{brewery.country}</Text>
        </View>
        <Button
          style={styles.favoriteButton}
          iconStyle={styles.starIcon}
          />
      </View>
    </Card>
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  card: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 3,
    padding:20,
    margin:20
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cityText: {
    fontSize: 14,
  },
  countryText: {
    fontSize: 14,
  },
  favoriteButton: {
  
  },
  starIcon: {
    
    tintColor: '#EDB332', 
  },
});

export default BreweryCard;