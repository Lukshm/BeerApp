import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar } from '@rneui/themed';

const BreweriesSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View>
      <SearchBar
        placeholder="Buscar cervecerías"
        onChangeText={handleSearch}
        value={searchText}
        lightTheme
        platform='android'
      />
    </View>
  );
};

export default BreweriesSearchBar;
