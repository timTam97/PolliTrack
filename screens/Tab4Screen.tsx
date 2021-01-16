import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

export default function Tab5Screen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'column', }}>
        <View style={{ width: '100%', flex: 3, marginHorizontal: 'auto', flexDirection: 'row'}}>
          <Image
          source={require('../assets/images/tick.png')}
          resizeMode="contain"
          style={styles.placement} />
        </View>
        
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.subtitle}>Photos have been sent</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ffffff',
    backgroundColor: '#FDF5D8',

  },
  button: {
    alignItems: 'center',
  },
  placement: {
    tintColor: 'green',
    aspectRatio: 1, 
    width: '100%',
    flex:1, 
    marginHorizontal: 100,
    marginTop: 50,
    
  },
  title: {
    fontSize: 50,
    // fontWeight: 'bold',
    color: '#DE8C1E',
    fontFamily: 'Roboto',
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 50,
    // fontWeight: 'bold',
    color: '#DE8C1E',
    fontFamily: 'Roboto',
    textAlign: 'center',
    flex: 2,
  }
});
