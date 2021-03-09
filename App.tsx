import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Card from './components/Card'

export default function App() {
  return (
    <View style={styles.container}>
       
    <StatusBar style="light" />
      <Text style={styles.titleLabel}>Would You Like to Eat Here?</Text>
      <Card name="Sonnys" streetAddress="42069 Blaze It Blvd" foodType="BBQ" onYes={() => {
        alert("Sounds Yummy!")
      }} onNo={() => { alert("Not Today") }} />
      

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434343',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLabel: {
    paddingBottom: 50,
    fontSize: 26,
    color: "white",
    fontFamily: "Trebuchet-BoldItalic",
    alignItems: 'center',
  }
});
