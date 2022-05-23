import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import CustomMap from '../../components/CustomMap/CustomMap';
import CustomLocationSearch from '../../components/CustomLocationSearch';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomMap />
      <CustomLocationSearch />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
