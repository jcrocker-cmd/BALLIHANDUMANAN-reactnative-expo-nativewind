import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const GoogleMapsView = () => {
  // Define the region with zoom
  const [region, setRegion] = useState<Region>({
    latitude: 9.754947, // Correct Latitude
    longitude: 123.971301, // Correct Longitude
    latitudeDelta: 0.05, // Zoom Level
    longitudeDelta: 0.05, // Zoom Level
  });

  return (
    <View style={styles.container} className="h-[380px] w-full">
      <MapView
        style={{ width: '100%', height: '100%' }}
        region={region} // ✅ Use `region` to control zoom dynamically
        mapType="hybrid" // Use hybrid (satellite + labels)
      >
        {/* Marker for Balilihan Municipal Hall */}
        <Marker
          coordinate={{ latitude: 9.754947, longitude: 123.971301 }}
          title="Balilihan Municipal Hall"
          description="Municipal Hall of Balilihan, Bohol"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    height: 400,
  },
});

export default GoogleMapsView;
