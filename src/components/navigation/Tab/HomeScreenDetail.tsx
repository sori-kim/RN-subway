import React, {Component} from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export function HomeScreenDetail({navigation, isHome, title}) {
    return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Home Detail" navigation={navigation} />
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gold'}}>
                <Text>Home Detail</Text>    
              </View>
            </SafeAreaView>
    );
  }