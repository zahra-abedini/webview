import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  const indexHTML = require('./index.html');

  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={indexHTML}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});