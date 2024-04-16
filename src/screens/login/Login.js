import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'red', height: '100%'}} ><Text>Nguyen</Text></View>
      <View style={{backgroundColor: 'darkorange'}} ><Text>Quoc</Text></View>
      <View style={{backgroundColor: 'green'}} ><Text>Trieu</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    flexDirection: 'column',
    height: '100%'
  },
});

export default Login;
