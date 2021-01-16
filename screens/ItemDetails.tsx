import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';
import MapView, { Marker } from 'react-native-maps';
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};
let price = undefined;
export default function ItemDetails({navigation, route}) {
  let item = route.params.item;
  const [price, setPrice] = useState(item.amountOwed.toString());
  console.log(item.image_url + "Cool");
return (

    <SafeAreaView style={{}}>
    <KeyboardAvoidingView>
      <ScrollView>
      <Card style = {{marginHorizontal: 10, marginVertical: 10}}>
      <Card.Title title={"Item: " + item.productName} right={(x) => {
        return (<Image source={{ uri: item.image_url }} resizeMode="contain" style={{ width: x.size * 2.5, aspectRatio: 1, borderRadius: 10000, ...styles.boxWithShadow, }} />)}}/>
        <Card.Content>
        <Text>Barcode: {item.barcode}</Text>
        <Text>Serial Number: {item.serialNumber}</Text>
        <Title>Location</Title>
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
            showsUserLocation={true}>
            <Marker coordinate={{ latitude: item.latitude, longitude: item.longitude }} />
          </MapView>
        </View>
        <Title style={{fontSize: 30, textAlign: "center", marginTop:20}}>Payment</Title>
        <View style={{ display: "flex", flexDirection: 'row', marginTop: 10}}>
              <Button mode='contained' compact={true} onPress={() => {setPrice('0')}}>Paid</Button>
              <TextInput keyboardType="number-pad" textAlign="right" value={price} onChange={setPrice} style={{ flex: 1, marginHorizontal: 10, backgroundColor: "#EAEAEA", paddingHorizontal: 10}}/>
           <Button mode="outlined" compact={true}>Update</Button> 
        </View>
        </Card.Content>
        <Card.Actions style={{ display: 'flex', alignContent: 'center', flexDirection: 'row'}}>
            <Button style={{ width: "50%", flex: 1, aspectRatio: 6, alignItems: 'center', alignContent: 'center', paddingVertical: 6 }} mode="contained" onPress={() => navigation.goBack()}><Text style={{fontSize: 20}}>DONE</Text></Button>
        </Card.Actions>
      </Card>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

export const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 5
  },
  container: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    marginTop: 10,
    aspectRatio: 1.75,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
