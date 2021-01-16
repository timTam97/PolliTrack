import * as React from 'react';
import {StyleSheet, TouchableHighlight, Image} from 'react-native';
import MapView from 'react-native-maps';
import {Text, View} from 'react-native';
import * as Linking from 'expo-linking';

let appointmentTime: number = Date.now();
appointmentTime = appointmentTime + (48 * (60 * 60 * 1000));

const dest = {
  'city': 'South Yarra',
  'country': 'Australia',
  'district': null,
  'isoCountryCode': 'AU',
  'name': '670 Chapel',
  'postalCode': '3141',
  'region': 'VIC',
  'street': 'Malcolm Street',
  'subregion': 'Melbourne',
  'timezone': 'Australia/Melbourne',
};
const destAddress = dest.name + ' ' + dest.city + ' ' + dest.region + ' ' + dest.postalCode.replace(/ /g, '+');

export default function Appointments({navigation}: any) {
  
  // let a: LocationGeocodedLocation;
  // Location.geocodeAsync("South Yarra Clinic").then((x) => a = x[0])
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        // initialRegion={DirectionUtil.clinicLocation}
        onPress={(() => Linking.openURL('comgooglemaps://?daddr=' + destAddress + '&directionsmode=driving'))}>
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#FDF5D8'
  },

  mapStyle: {
    // position: "absolute",
    // alignContent: "center",
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 17,
    height: 550,
    width: 322,
    marginTop: 150,
    top: -100,
    marginLeft: 20,
    marginRight: 20,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // radi: Dimensions.get('window').width / 2
  },

});