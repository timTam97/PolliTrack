import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddPhotoPrompt({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 2, backgroundColor: '#FDF5D8'}}  >
        <Text style={{ ...styles.title, textAlign: 'center', color: '#DE8C1E',}}>
          Please take a photo of person holding product
        </Text>
      </View>
      <View style={{ flex: 3, flexDirection: 'column', backgroundColor: '#FDF5D8'}}>
          <Image
            source={require('../assets/images/c1.png')}
            resizeMode="contain"
            style={styles.placement} />
          <Image
            source={require('../assets/images/lad.png')}
            resizeMode="contain"
            style={styles.placement} />
      </View>
      <View style={{ flex: 1, minHeight: 50, backgroundColor: '#FDF5D8'}}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('addPhotoCapture', {})}} style={{
            ...styles.button, flex: 2, backgroundColor: '#f3b352', alignItems: 'center', justifyContent: 'center', borderRadius: 100000}}>
          <Text style={{ color: 'white', fontSize: 30, padding: 100, textAlign: 'center' }}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    backgroundColor: '#FDF5D8',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  placement: {
    flex: 1,
    aspectRatio: 1,
    width: 100
  },

  button: {
    borderRadius: 5,
    margin: 30,
    backgroundColor: '#FDF5D8',
    textAlign: 'center',
    alignItems: 'center',
  }
});
