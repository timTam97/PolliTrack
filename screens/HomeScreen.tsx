import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Image
          source={require('../assets/images/Greeting.png')}
          resizeMode="contain"
          style={styles.greeting}
        ></Image>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    paddingLeft: 40,
    position: 'absolute',
    left: -10,
    top: 10,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#807B7B',
    lineHeight: 20,
  },
  image6: {
    width: 129,
    height: 140,
    marginHorizontal: 10,
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    height: 200,
    paddingLeft: 20,
    paddingRight: 100,
  },
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
  },
  button: {
    alignItems: 'center',
    marginTop: 405,
  },
  greeting: {
    width: 350,
    height: 250,
    top: -70,
    left: 30,
  },
  greetingContainer: {
    height: 0,
  },
});
