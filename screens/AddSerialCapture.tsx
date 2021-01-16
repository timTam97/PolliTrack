import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddPhotoPrompt() {
  return (
    <View style={styles.container}>
      <Text>
        Please take a photo of the person holding a product
      </Text>
      
      {/* <Text style={styles.title}>Reporting</Text> */}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
