import React from 'react';
import { ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {IMAGE} from '../shared/Image';

export function CustomDrawerContent(props){
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: 'gold'}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{height: 120, width: 120 }} source={IMAGE.ICON_USER} />
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
            onPress={() =>props.navigation.navigate('Notifications') }
            >
            <Text>Notifications</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }