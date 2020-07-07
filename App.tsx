import * as React from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'


function CustomHeader({title, isHome, navigation}){
  return(
    <View style={{flexDirection: 'row', height: 50 }}>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        <View style={{flex: 1, justifyContent: 'center' }}>
           {
             isHome ?
              <Image style={{width: 25, height: 25, marginLeft: 15}} 
                source={require('./assets/hamburger.png')}
                resizeMode='contain'
              />
              : 
              <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={()=> navigation.goBack()}
                >
                <Image style={{width: 20, height: 20, marginLeft: 15, marginRight: 5}}
                source={require('./assets/back.png')}
                resizeMode='contain'
                  />
                <Text>Back</Text>
              </TouchableOpacity>
           }
        </View>
        </TouchableOpacity>

        <View style={{flex: 2, justifyContent: 'center' }}>
          <Text style={{textAlign: 'center'}}>{title}</Text>
        </View>
        <View style={{flex: 1 }}></View>
    </View>
  )
}


function HomeScreen({navigation, isHome, title}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gold'}}>
        <Text>Home Detail</Text>    
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({navigation, isHome}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title="Setting" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting!</Text>
        <TouchableOpacity 
          style={{marginTop: 20}}
          onPress={()=> navigation.navigate('SettingDetail') }
          >
          <Text>Go Setting Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <CustomHeader title="SettingDetail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
        <Text>Setting Detail</Text>    
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Notifications" navigation={navigation} />
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text>Notifications screen!</Text>    
     </View>
   </SafeAreaView>
  );
}

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex: 1, backgroundColor: 'gold'}}>
      <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{height: 120, width: 120 }}source={require('./assets/user.png')} />
      </View>
      <ScrollView style={{marginLeft: 25}} >
        <TouchableOpacity 
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab') }
          >
          <Text>Menu Tab</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Notifications') }
          >
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

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

export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={ (props) => <CustomDrawerContent {...props}/> } >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}  

