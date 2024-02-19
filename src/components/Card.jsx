import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-ui-lib'; // Importar Card y Button de RNUILib
import { GlobalStateContext } from '../context/Global';


const BreweryCard = ({brewery, navigation }) => {

  
  return (
    <Card
      borderRadius={12}
      style={styles.card}
      padding-20
      margin-20
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
    marginBottom: 10,
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