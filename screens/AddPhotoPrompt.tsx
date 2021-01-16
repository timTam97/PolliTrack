import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddPhotoPrompt({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, }} />
      
      <View style={{ alignItems: 'center', justifyContent: 'center' , backgroundColor:'#FDF5D8'}} >
        <Text style={{ ...styles.title, textAlign: 'center', color: '#DE8C1E',}}>
          Please take a photo of person holding product
      </Text>
    

        </View>
        <Image
          source={require('../assets/images/c1.png')}
          resizeMode="contain"
          style={styles.placement}
        ></Image>
          <Image
          source={require('../assets/images/lad.png')}
          resizeMode="contain"
          style={styles.placement2}
        ></Image>
      
      <View style={{  }} />
      <TouchableOpacity
        onPress={() => { navigation.navigate('TabThreeScreen', {})}} style={{
          ...styles.button, flex: 2, backgroundColor: '#de8c1e', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ color: 'white', fontSize: 30, padding: 100, textAlign: 'center' }}>Proceed</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF5D8',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  placement: {
    marginHorizontal: -155,
    marginVertical:40,
    height: 140,
    backgroundColor: '#FDF5D8',
    
  },
  placement2: {
    marginHorizontal: -155,
    marginVertical:40,
    height: 170,
    backgroundColor: '#FDF5D8',
    
  },
  button: {
    borderRadius: 5,
    margin: 30,
    backgroundColor: '#FDF5D8',
    textAlign: 'center',
    alignItems: 'center',
  }
});
