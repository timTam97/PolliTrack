import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddBarcodePrompt({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, }} />
      
      <View style={{ flex: 9, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{ ...styles.title, padding: 20, textAlign: 'center', color: '#DE8C1E',}}>
          Please take a photo of the barcode
      </Text>
    

        </View>
        <Image
          source={require('../assets/images/barcode.png')}
          resizeMode="contain"
          style={styles.placement}
        ></Image>
      
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
  placement: {
    marginHorizontal: -70,
    marginVertical:10,
    height: 300
  },
  button: {
    borderRadius: 5,
    margin: 10,
  }
});
