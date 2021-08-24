import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {Audio} from 'expo-av'

class SoundButton extends Component {
    playSound=async(sound)=>{
        var link="https://s3-whitehatjrcontent.whjr.online/phones/"+sound+".mp3"
        await Audio.Sound.createAsync(
            {uri:link},
            {shouldPlay:true}
        )
    }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{this.playSound(this.props.phones)}}><Text>{this.props.chunk}</Text></TouchableOpacity>
      </View>
    )
  }
}

export default SoundButton