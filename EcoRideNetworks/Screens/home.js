
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add markers for places */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker 1"
          description="Description for Marker 1"
        />
        <Marker
          coordinate={{ latitude: 37.7855, longitude: -122.434 }}
          title="Marker 2"
          description="Description for Marker 2"
        />
        {/* Add more markers for other places as needed */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  drawerIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default MapScreen;




