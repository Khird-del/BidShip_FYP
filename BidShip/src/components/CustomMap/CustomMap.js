import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function CustomMap() {
  const [lat, setLat] = useState(33.6844);
  const [long, setLong] = useState(73.0479);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(geoSuccess, geofail, {
      enableHighAccuracy: true,
      timeout: 500,
    });
  };

  const geoSuccess = info => {
    setLat(info.coords.latitude);
    setLong(info.coords.longitude);
  };
  const geofail = fail => {
    alert(JSON.stringify(fail));
  };

  const [region, setRegion] = useState({
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.092,
    longitudeDelta: 0.041,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
        onRegionChange={region => {}}
        onRegionChangeComplete={region => setRegion(region)}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
        />
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
    borderWidth: 5,
    borderColor: '#e8e8e8',
    borderRadius: 15,
  },
  search: {
    width: '100%',
  },
});

export default CustomMap;
