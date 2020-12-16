import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import StewCategory from './StewCategory';
import SaveStew from './SaveStew';
import FilterScreen from './FilterScreen';
import StewDetails from './StewDetails';
import StewListCategory from './StewListCategory';
import {THEME_COLORS} from '../Theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="StewCategory"
      // drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="StewCategory"
        component={CategoryRoute}
        options={{
          title: 'Category',
          drawerLabel: ({focused, color}) => (
            <Text
              style={{color: focused ? THEME_COLORS.primaryColor : 'black'}}>
              {'Category'}
            </Text>
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/list.png')}
              style={[
                focused
                  ? {
                      height: 30,
                      width: 30,
                      tintColor: THEME_COLORS.primaryColor,
                    }
                  : {height: 20, width: 20},
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SaveStew"
        component={CartRoute}
        options={{
          title: 'Save  Stew',
          drawerLabel: ({focused, color}) => (
            <Text
              style={{color: focused ? THEME_COLORS.primaryColor : 'black'}}>
              {'Save Cake Recipe'}
            </Text>
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/download.png')}
              style={[
                focused ? {height: 30, width: 30} : {height: 20, width: 20},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="FilterScreen"
        component={FilterRoute}
        options={{
          title: 'Filter',
          drawerLabel: ({focused, color}) => (
            <Text
              style={{color: focused ? THEME_COLORS.primaryColor : 'black'}}>
              {'Filter Calories'}
            </Text>
          ),
          drawerIcon: ({focused, size}) => (
            <Image
              source={require('../assets/filter.png')}
              style={[
                focused ? {height: 30, width: 30} : {height: 20, width: 20},
              ]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const CategoryRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StewCategory"
        component={StewCategory}
        options={{
          headerTitle: 'Category',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="StewListCategory" component={StewListCategory} />
      <Stack.Screen name="StewDetails" component={StewDetails} />
    </Stack.Navigator>
  );
};

const CartRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SaveStew"
        component={SaveStew}
        options={{
          headerTitle: 'Save Stew',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="StewDetails"
        component={StewDetails}
        // options={{headerTitle: 'Full Image'}}
      />
    </Stack.Navigator>
  );
};

const FilterRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          headerTitle: 'Filter',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="StewDetails"
        component={StewDetails}
        // options={{headerTitle: 'Full Image'}}
      />
    </Stack.Navigator>
  );
};

export default Home;
