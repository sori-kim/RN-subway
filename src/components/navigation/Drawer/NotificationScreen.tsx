import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import {CustomHeader} from '../index'

export function NotificationScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Notifications" navigation={navigation} />
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text>Notifications screen!</Text>    
         </View>
       </SafeAreaView>
      );
  }