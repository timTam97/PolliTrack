import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddPhotoPrompt({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, }} />
      <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }} >
        <View style={{flexDirection: 'row', margin:20}}>
          <Image source={require('../assets/images/camera.png')} style={{flex:1}} />
          <Image source={require('../assets/images/person.png')} style={{flex: 1}} />
        </View>
        <Text style={{ ...styles.title, padding: 20, textAlign: 'center', color: '#DE8C1E',}}>
          Please take a photo of the person holding the product
      </Text>
        </View>
      <View style={{ flex: 1, }} />
      <TouchableOpacity
        onPress={() => { navigation.navigate('TabThreeScreen', {})}} style={{
          ...styles.button, flex: 2, backgroundColor: '#de8c1e', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ color: 'white', fontSize: 40, }}>Proceed</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    margin: 10,
  }
});
