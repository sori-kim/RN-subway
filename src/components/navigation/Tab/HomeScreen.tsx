import React, {Component} from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export function HomeScreen({navigation, isHome, title}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Home" isHome={true} navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home!</Text>
        </View>
      </SafeAreaView>
    );
  }