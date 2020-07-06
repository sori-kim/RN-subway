import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screen/Home';
import Sidebar from '../screen/Sidebar';





const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();




// function LogoTitle(): React.ReactElement {
//   return (
//     <Image
//       style={{ width: 90, height: 20 }}
//       source={require('../../../assets/logo.png')}
//     />
//   );
// }

// function Hamburger(navigation): React.ReactElement {
//   return (
//     <TouchableOpacity >
//       <Image
//         style={{ width: 20, height: 20, margin: 10 }}
//         source={require('../../../assets/hamburger.png')}
//       />
//     </TouchableOpacity>
//   );
// }

// function Cart(): React.ReactElement {
//   return (
//     <TouchableOpacity
//       onPress={() =>
//         alert('로그인을 해주세요!', [
//           { text: 'OK', onPress: (): void => console.log('OK Pressed') },
//         ])
//       }
//     >
//       <Image
//         style={{ width: 25, height: 25, margin: 10 }}
//         source={require('../../../assets/cart.png')}
//       />
//     </TouchableOpacity>
//   );
// }

// // function DrawerScreen(): React.ReactElement {
// //   return (
// //     <View>
// //       <Text>로그인 해주세요. 아직 회원이 아니신가요?</Text>
// //       <TouchableOpacity>로그인</TouchableOpacity>
// //     </View>
// //   );
// // }




// function StackRoot(){
//   return(
//       <Stack.Navigator
//         initialRouteName="Home"
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerTitle: (props) => <LogoTitle {...props} />,
//             headerRight: (props) => <Cart {...props} />,
//             headerLeft: (props) => <Hamburger {...props} />,
//           }}
//         />
//          <Stack.Screen name="Sidebar" component={Sidebar} />
//       </Stack.Navigator>



//   )
// }

// function RootNavigatior () {
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator>
//             <Drawer.Screen 
//               name="StackRoot" 
//               component={StackRoot}
//                />
//             <Drawer.Screen name="Home" component={Home} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }


export default RootNavigatior;