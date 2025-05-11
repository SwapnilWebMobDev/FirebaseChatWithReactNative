// src/components/ScreenWrapper.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';

const ScreenWrapper = ({ children, backgroundColor = '#fff' }) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default ScreenWrapper;
