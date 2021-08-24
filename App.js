import React, { Component } from "react";
import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import SoundButton from "./components/SoundButton";

import db from "./db";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      chunks: [],
      phones:[]
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            centerComponent={{
              text: "Everyone Tries To Read",
              style: { color: "#fff", fontWeight: "750" },
            }}
          />
          <TextInput
            onChangeText={(text) => {
              this.setState({
                word: text,
              });
            }}
            placeholder="Enter Word"
          />
          <TouchableOpacity
            onPress={() => {
              this.setState({ chunks: db[this.state.word].chunks });
              this.setState({ phones: db[this.state.word].phones });
              console.log(this.state.phones);
            }}
          >
            <Text>Produce Word</Text>
          </TouchableOpacity>
          {this.state.chunks.map((chunk,index) => {
            return(
              <SoundButton chunk={this.state.chunks[index]}
              phones={this.state.phones[index]}
              />
            )
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}
