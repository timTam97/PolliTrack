import React from 'react';
import { useState } from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function ItemDetails(navigation) {
  const [items, setItems] = useState({});
return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{}}>Show item</Text>
      <Text style={{}}>Item: { }</Text>
      <Text style={{}}>Time Sold: { }</Text>
      <Text style={{}}>Serial Number: { }</Text>
      <Text style={{}}>barcode: { }</Text>


    </SafeAreaView>

  );
}

export const styles = StyleSheet.create({
});
