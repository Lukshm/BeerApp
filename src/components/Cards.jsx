import React from "react";
import { View, ScrollView } from "react-native";
import BreweryCard from "./Card";

const Cards = ({ navigation, breweries }) => {
  return (
    <View>
      <ScrollView>
        {breweries.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cards;
