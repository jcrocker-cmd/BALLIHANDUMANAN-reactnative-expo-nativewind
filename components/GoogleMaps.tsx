import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GoogleMapsView = () => {
  return (
    <View style={styles.container} className="h-[380px] w-full border border-black">
      <MapView
        style={{ width: '100%', height: '100%' }} // Set height directly
        initialRegion={{
          latitude: 9.79599,
          longitude: 124.264934,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{ latitude: 9.79599, longitude: 124.264934 }}
          title="My Location"
          description="This is a marker for my location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    height: 400,
    // Removed flex: 1 so it respects the height from className
  },
});

export default GoogleMapsView;
