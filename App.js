/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(){
    super();
    this.state[]={
      ID: 0,
      SortIndex: 0,
      Name: "",
      IP: 0,
      Port: 0,
      UserCount: 0,
      MaxUsers: 0,
      State: false,
      Chat: false,
      Language: "",
      LocalIP: "",
      LastUpdated: 0,
      Buildversion: 0,
      Hostname: "",
    }
  }

  ComponentDidMount(){
    return fetch('http://game.aq3d.com/api/Game/ServerList')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
          alert(dataSource)
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
 render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    />
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});