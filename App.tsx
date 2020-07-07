import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  { CustomDrawerContent } from './src/components/navigation/CustomDrawerContent';
import  { HomeScreen, HomeScreenDetail, SettingScreen, SettingScreenDetail }  from './src/components/navigation/Tab/index';
import  { NotificationScreen }  from './src/components/navigation/Drawer/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler = ()=> ({
  headerShown: false
}) 

function HomeStack(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}  options={navOptionHandler}/>
      <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </Stack.Navigator>
  )
}

function SettingStack(){
  return(
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingScreen} options={navOptionHandler} />
      <Stack.Screen name="SettingDetail" component={SettingScreenDetail} options={navOptionHandler} />
    </Stack.Navigator>
  )
}

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App({navigation}) {

  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={ (props) => <CustomDrawerContent {... props}/> } >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}  

