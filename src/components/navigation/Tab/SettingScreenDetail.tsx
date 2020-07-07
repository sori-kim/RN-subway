import React, {Component} from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export function SettingScreenDetail({navigation, isHome, title}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
         <CustomHeader title="SettingDetail" navigation={navigation} />
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text>Setting Detail</Text>    
          </View>
        </SafeAreaView>
      );
  }