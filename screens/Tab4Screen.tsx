import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

export default function Tab5Screen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Image
          source={require('../assets/images/check.png')}
          resizeMode="contain"
          style={styles.placement}
        ></Image>
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.subtitle}>Photos have been sent</Text>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: -180,
    justifyContent: 'center',
    width: 500,
    height: 357,
    flex: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    backgroundColor: '#FDF5D8'

  },
  button: {
    alignItems: 'center',
    marginTop: 405,
  },
  placement: {
    marginHorizontal: 110,
    marginVertical:20
  },
  title: {
    fontSize: 50,
    // fontWeight: 'bold',
    color: '#DE8C1E',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 50,
    // fontWeight: 'bold',
    color: '#DE8C1E',
    fontFamily: 'Roboto',
    textAlign: 'center'
  }
});
