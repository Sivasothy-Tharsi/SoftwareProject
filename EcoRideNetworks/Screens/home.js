

import React, { useEffect } from 'react';
import { View, StyleSheet, Alert, Platform, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const MapScreen = ({ navigation }) => {
  useEffect(() => {
    // Check if location permission is granted
    const permissionType = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    check(permissionType)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            // Prompt user to enable location services
            Alert.alert(
              'Enable Location Services',
              'Please enable location services to use this app.',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                },
                {
                  text: 'Open Settings',
                  onPress: () => openLocationSettings()
                }
              ]
            );
            break;
          case RESULTS.GRANTED:
            console.log('Location permission granted');
            break;
          case RESULTS.BLOCKED:
            console.log('Location permission denied and blocked');
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openLocationSettings = () => {
    // Open location settings for Android
    Linking.openSettings();
  };

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
});

export default MapScreen;













// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
// const MapScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
    
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {/* Add markers for places */}
//         <Marker
//           coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//           title="Marker 1"
//           description="Description for Marker 1"
//         />
//         <Marker
//           coordinate={{ latitude: 37.7855, longitude: -122.434 }}
//           title="Marker 2"
//           description="Description for Marker 2"
//         />
//         {/* Add more markers for other places as needed */}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   drawerIcon: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
// });

// export default MapScreen;


