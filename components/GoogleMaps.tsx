import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapScreen() {
  const mapHtml = `
    <html>
      <body style="margin:0;padding:0;">
        <iframe 
          width="100%" 
          height="100%" 
          style="border:0;" 
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.573537730789!2d123.96862467479018!3d9.75486149033838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa37fec10cbb61%3A0x3408d1add925af42!2sBalilihan%20Municipal%20Hall!5e1!3m2!1sfil!2sph!5m2!1sfil!2sph!2z15">
        </iframe>
      </body>
    </html>
  `;

  return (
    <View style={{ height: 300, width: '100%', marginVertical: 12 }} className="pb-5">
      <WebView
        originWhitelist={['*']}
        source={{ html: mapHtml }}
        style={{ height: 250, width: '100%' }}
      />
    </View>
  );
}
