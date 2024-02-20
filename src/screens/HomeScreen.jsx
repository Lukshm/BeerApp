import React, { useContext, useState } from "react";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import BreweriesSearchBar from "../components/SearchBar";
import { GlobalStateContext } from "../context/Global";
import { StyleSheet, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { allBreweries } = useContext(GlobalStateContext);
  const [allBreweriesFiltered, setAllBreweriesFiltered] = useState(allBreweries);
  
  const handleSearch = (searchText) => {
    if (!searchText.trim()) {
      setAllBreweriesFiltered(allBreweries);
      return;
    }

    const lowercaseFilter = searchText.toLowerCase();
    const filtered = allBreweries.filter(brewery =>
      brewery.name.toLowerCase().includes(lowercaseFilter) ||
      brewery.city.toLowerCase().includes(lowercaseFilter) ||
      brewery.country.toLowerCase().includes(lowercaseFilter)
    );
    setAllBreweriesFiltered(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <BreweriesSearchBar 
          onSearch={handleSearch}
        />
      </View>

      <View style={styles.cardsContainer}>
        <Cards navigation={navigation} allBreweries={allBreweriesFiltered} />
      </View>

      <View style={styles.paginationContainer}>
        <Pagination style={styles.pagination} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchBarContainer: {
    backgroundColor: 'white', 
    borderWidth: 0, 
    shadowColor: 'white'
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
  },
  paginationContainer: {

  },
});

export default HomeScreen;
