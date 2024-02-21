import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { GlobalStateContext } from '../context/Global';
import BreweryCard from '../components/Card';

const Favorites = () => {
  const { favorites } = useContext(GlobalStateContext);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {favorites.map(brewery => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
});

export default Favorites;