import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { GlobalStateContext } from '../context/Global';

const Pagination = ({ totalPages, handleClick, handleClickPrev, handleClickNext }) => {
  const { currentPage } = useContext(GlobalStateContext);

  const getPaginationButtons = () => {
    let buttons = [];
    const startPage = Math.max(1, currentPage - 20);
    const endPage = Math.min(totalPages, currentPage + 20);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={currentPage === i ? styles.activeButton : styles.button}
          onPress={() => handleClick(i)}
        >
          <Text>{i}</Text>
        </TouchableOpacity>
      );
    }
    return buttons;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={currentPage === 1}
        style={styles.button}
        onPress={handleClickPrev}
      >
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {getPaginationButtons()}
      </ScrollView>
      <TouchableOpacity
        disabled={currentPage === totalPages}
        style={styles.button}
        onPress={handleClickNext}
      >
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    padding: 8,
    marginHorizontal: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  activeButton: {
    padding: 8,
    marginHorizontal: 6,
    backgroundColor: '#EDB332',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    color: '#000',
  },
  ellipsis: {
    color: '#000',
    paddingHorizontal: 12,
  }
});



export default Pagination;
