import React from 'react';
import { useState } from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function Tab5Screen() {
  const [items, setItems] = useState({});
return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.agenda}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          '2021-01-16': [{
            "ProductName": "Sun King Pro 400", // Might get this from a look up table with the pollinategroup with the barcode
            "barcode": "9300633645540",
            "timestamp": "1610792784",
            "image_url": "https://pollitrack-images-asdgybdvkl.s3.amazonaws.com/kIJvN7GdF-W7MQ.jpeg",
            "latitude": -37.862458333333336,
            "longitude": 145.1865527777778,
            "amountOwed": 120.0,
          }],
          '2021-01-17': [{
            "ProductName": "Sun King Pro 400", // Might get this from a look up table with the pollinategroup with the barcode
            "barcode": "9300633645540",
            "timestamp": "1610792784",
            "image_url": "https://pollitrack-images-asdgybdvkl.s3.amazonaws.com/kIJvN7GdF-W7MQ.jpeg",
            "latitude": -37.862488333333336,
            "longitude": 145.1865527777778,
            "amountOwed": 120.0,
          }],
          '2021-01-18': [{
            "ProductName": "Sun King Pro 400", // Might get this from a look up table with the pollinategroup with the barcode
            "barcode": "9300633645540",
            "timestamp": "1610792784",
            "image_url": "https://pollitrack-images-asdgybdvkl.s3.amazonaws.com/kIJvN7GdF-W7MQ.jpeg",
            "latitude": -37.862488333333336,
            "longitude": 145.1865527777778,
            "amountOwed": 120.0,
          }],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        // loadItemsForMonth={(month) => { console.log('trigger items loading') }} 
        // Callback that fires when the calendar is opened or closed
        // onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
        // Callback that gets called on day press
        // onDayPress={(day) => { console.log('day pressed') }}
        // Callback that gets called when day changes while scrolling agenda list
        // onDayChange={(day) => { console.log('day changed') }}
        // Initially selected day
        // selected={'2012-05-16'}
        // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'2012-05-10'}
        // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={({ ProductName, amountOwed }) => {
              return (
                <TouchableOpacity>
                  <List.Item 
                    title={"Sold " + ProductName}
                    description={"Amount Owing: $" + amountOwed}
                    style={{marginTop: 10, marginBottom: 10, backgroundColor: 'white', borderRadius: 10}} >
                  </List.Item>
                </TouchableOpacity>
              );}}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
        // renderDay={(day, item) => { return (<View />); }}
        // Specify how empty date content with no items should be rendered
        // renderEmptyDate={() => { return (<View />); }}
        // Specify how agenda knob should look like
        // renderKnob={() => { return (<View />); }}
        // Specify what should be rendered instead of ActivityIndicator
        // renderEmptyData={() => { return (<View />); }}
        // Specify your item comparison function for increased performance
        // rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
        // Hide knob button. Default = false
        hideKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        // markedDates={{
        //   '2012-05-16': { selected: true, marked: true },
        //   '2012-05-17': { marked: true },
        //   '2012-05-18': { disabled: true }
        // }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
        // onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
        refreshControl={null}
        // Agenda theme
        // theme={{
        //   ...styles.agenda,
        //   agendaDayTextColor: 'yellow',
        //   agendaDayNumColor: 'green',
        //   agendaTodayColor: 'red',
        //   agendaKnobColor: 'blue'
        // }}
        // Agenda container style
      />
      </View>

    </SafeAreaView>

  );
}

export const styles = StyleSheet.create({
  title: {
    // fontFamily: 'Lato_700Bold',
    color: 'rgba(23,34,133,1)',
    fontSize: 35,
    marginTop: 25,
    marginLeft: 34,
  },
  agenda: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  event: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 15,
    paddingBottom: 7,
  }
});
