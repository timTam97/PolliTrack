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
import { AddProductParamList, BottomTabParamList} from '../types';

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
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
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
    <AddProductStack.Navigator>
      <AddProductStack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{ headerTitle: 'Add Product' }}
      />
      <AddProductStack.Screen
        name="addPhotoPrompt"
        component={AddPhotoPrompt}
        options={{ headerTitle: 'Add Photo' }}
      />
      <AddProductStack.Screen
        name="addPhotoCapture"
        component={AddPhotoCapture}
        options={{ headerTitle: 'Add Photo' }}
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
