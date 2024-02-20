import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { GlobalStateContext } from '../context/Global';

const Pagination = ({ totalPages, handleClick, handleClickPrev, handleClickNext }) => {
  const { currentPage } = useContext(GlobalStateContext);

  const getPaginationButtons = () => {
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
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
      {getPaginationButtons()}
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
    backgroundColor: '#FFFFF',
    borderRadius: 5,
  },
  activeButton: {
   padding: 8,
    marginHorizontal: 6,
    backgroundColor: '#EDB332',
    borderRadius: 5,
    borderColor: 'black', // Puedes cambiar esto al color que prefieras
    borderWidth: 2, // Ajusta el grosor del borde aquí
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
