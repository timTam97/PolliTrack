import { NavigatorScreenParams } from '@react-navigation/native';
import * as React from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AddProductParamList } from '../types';


export default function AddProductScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap to add Product</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate('addPhotoPrompt', {})}
        onPress={() => navigation.navigate('addSerialPrompt')}>
        <Image style={styles.button} source={require('../assets/images/addproduct.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
    // fontWeight: 'bold',
    
    color: '#DE8C1E',
    fontFamily: 'Roboto'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    
  }
});
