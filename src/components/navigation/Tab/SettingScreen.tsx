import React, {Component} from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export function SettingScreen({navigation, isHome, title}) {
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