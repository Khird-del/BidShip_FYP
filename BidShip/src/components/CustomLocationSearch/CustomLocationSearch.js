import React from 'react';
import {StyleSheet, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function CustomLocationSearch() {
  return (
    <View style={styles.search}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        returnKeyType={'search'}
        minLength={3}
        fetchDetails={true}
        listViewDisplayed="auto"
        onPress={(data, details = null) => {
          // 'details' is  provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDtRrrGFacpU7PhYpEFwsn-PxnWFcg7FYs',
          language: 'en',
          components: 'country:pk',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    flex: 1,
    width: '100%',
  },
});

export default CustomLocationSearch;
