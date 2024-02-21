import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';
import { GlobalStateContext } from '../context/Global';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const BreweryCard = ({ brewery }) => {
  const { favorites, setFavorites } = useContext(GlobalStateContext);
  const detailNavigation = useNavigation();

  const isFavorite = favorites.some(fav => fav.id === brewery.id);

  const handlePress = () => {
    detailNavigation.navigate('DetailScreen', { brewery: brewery });
  };

  const handleFavoritePress = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== brewery.id));
    } else {
      setFavorites([...favorites, brewery]);
    }
  };

  return (
    <Card borderRadius={12} style={styles.card}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.detailsTouchable}>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>{brewery.name}</Text>
            <Text style={styles.cityText}>{brewery.city}</Text>
            <Text style={styles.countryText}>{brewery.country}</Text>
          </View>
        </TouchableOpacity>
        <Icon 
          name={isFavorite ? "star" : "star-o"} 
          size={25} 
          color={isFavorite ? "#EDB332" : "#000000"}
          onPress={handleFavoritePress}
          style={styles.favoriteIcon}
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
    marginBottom: 3,
    padding: 20,
    margin: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsTouchable: {
    flex: 1,
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

});

export default BreweryCard;