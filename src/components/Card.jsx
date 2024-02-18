import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-ui-lib'; // Importar Card y Button de RNUILib

const BreweryCard = ({ name, city, country }) => {
  return (
    <Card
      borderRadius={12}
      style={styles.card}
      padding-20
      margin-20
    >
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.cityText}>{city}</Text>
          <Text style={styles.countryText}>{country}</Text>
        </View>
        <Button
          style={styles.favoriteButton}
        //   iconSource={require('./path-to-star-icon.png')}
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
    
    tintColor: '#FFD700', 
  },
});

export default BreweryCard;