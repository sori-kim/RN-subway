import React, {Component} from 'react';
import { ScrollView, Button, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { IMAGE } from '../shared/Image';

export function CustomHeader({title, isHome, navigation}){
    return(
      <View style={{flexDirection: 'row', height: 50 }}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <View style={{flex: 1, justifyContent: 'center' }}>
             {
               isHome ?
                <Image style={{width: 25, height: 25, marginLeft: 15}} 
                  source= {IMAGE.ICON_BACK}
                  resizeMode='contain'
                />
                : 
                <TouchableOpacity 
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={()=> navigation.goBack()}
                  >
                  <Image style={{width: 20, height: 20, marginLeft: 15, marginRight: 5}}
                   source= {IMAGE.ICON_BACK}
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