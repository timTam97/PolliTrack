import React from 'react';
import { useState } from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function ItemDetails({props}) {
  console.log(props)
  let item = {
            "ProductName": "Sun King Pro 400", // Might get this from a look up table with the pollinategroup with the barcode
            "barcode": "9300633645540",
            "timestamp": "1610792784",
            "image_url": "https://pollitrack-images-asdgybdvkl.s3.amazonaws.com/kIJvN7GdF-W7MQ.jpeg",
            "latitude": -37.862458333333336,
            "longitude": 145.1865527777778,
            "amountOwed": 120.0,
          };
  const [items, setItems] = useState({});
return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{}}>Show item</Text>
      <Text style={{}}>Item: {item.barcode}</Text>
      <Text style={{}}>Time Sold: { }</Text>
      <Text style={{}}>Serial Number: { }</Text>
      <Text style={{}}>barcode: { }</Text>


    </SafeAreaView>

  );
}

export const styles = StyleSheet.create({
});
