import React from "react";
import Cards from "../components/Cards";
import { StyleSheet, View } from "react-native";
import Pagination from "../components/Pagination";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Cards navigation={navigation} />
      </SafeAreaView>
      <Pagination style={styles.pagination}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  pagination: {

  }

});

export default HomeScreen;
