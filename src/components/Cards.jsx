import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import BreweryCard from "../components/Card";
import { GlobalStateContext } from "../context/Global";
import usePagination from "../hooks/usePagination";

const Cards = ({ navigation }) => {
  const { currentPageBreweries } = usePagination();

 
  

  return (
    <View>
      <ScrollView>
        {currentPageBreweries.length > 0 && currentPageBreweries.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cards;
