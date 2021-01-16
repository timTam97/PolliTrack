import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AddPhotoCapture from '../screens/AddPhotoCapture';
import AddPhotoPrompt from '../screens/AddPhotoPrompt';
import AddProductScreen from '../screens/AddProductScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import Tab4Screen from '../screens/AcceptanceScreen';
import { AddProductParamList, BottomTabParamList} from '../types';
import AddBarcodeCapture from '../screens/AddBarcodeCapture';
import AddSerialCapture from '../screens/AddSerialCapture';
import AddBarcodePrompt from '../screens/AddBarcodePrompt';
import AddSerialPrompt from '../screens/AddSerialPrompt';
import AgendaScreen from '../screens/AgendaScreen';
import ItemDetails from '../screens/ItemDetails';
import AcceptanceScreen from '../screens/AcceptanceScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={AddProductNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          headerShown: false
        }}
      />
      {/* <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          headerShown: false
        }}
      /> */}
      <BottomTab.Screen
        name="Tab5"
        component={AgendaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AddProductStack = createStackNavigator<AddProductParamList>();

function AddProductNavigator() {
  return (
    
    <AddProductStack.Navigator
    screenOptions={{ header: () => {}}}>
      <AddProductStack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{ headerShown: false }}
      />
      <AddProductStack.Screen
        name="addPhotoPrompt"
        component={AddPhotoPrompt}
        options={{ headerTitle: 'Add Photo' }}
      />
      <AddProductStack.Screen
        name="addBarcodePrompt"
        component={AddBarcodePrompt}
        options={{ headerTitle: 'Add Barcode' }}
      />
      <AddProductStack.Screen
        name="addBarcodeCapture"
        component={AddBarcodeCapture}
        options={{ headerTitle: 'Add Barcode' }}
      />
      <AddProductStack.Screen
        name="addSerialPrompt"
        component={AddSerialPrompt}
        options={{ headerTitle: 'Add Serial number' }}
      />
      <AddProductStack.Screen
        name="addPhotoCapture"
        component={AddPhotoCapture}
        options={{ headerTitle: 'Add Photo' }}
      />    
      <AddProductStack.Screen
        name="addSerialCapture"
        component={AddSerialCapture}
        options={{ headerTitle: 'Add Serial Number' }}
      />
      <AddProductStack.Screen
        name="acceptanceScreen"
        component={AcceptanceScreen}
        options={{ headerTitle: 'All done' }}
      />
    </AddProductStack.Navigator>
  );
}
const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </TabThreeStack.Navigator>
  );
}

const Tab4Stack = createStackNavigator<Tab4ParamList>();

function Tab4Navigator() {
  return (
    <Tab4Stack.Navigator>
      <Tab4Stack.Screen
        name="Tab4Screen"
        component={Tab4Screen}
        options={{ headerTitle: 'Tab 4 Title' }}
      />
    </Tab4Stack.Navigator>
  );
}

const AgendaStack = createStackNavigator<Tab5ParamList>();

function AgendaNavigator() {
  return (
    <AgendaStack.Navigator>
      <AgendaStack.Screen
        name="agenda"
        component={AgendaScreen}
        options={{ headerTitle: 'Agenda' }}
      />
      <AgendaStack.Screen
        name="itemDetails"
        component={ItemDetails}
        options={{ headerTitle: 'Agenda' }}
      />
    </AgendaStack.Navigator>
  );
}