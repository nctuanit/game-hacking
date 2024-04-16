import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/screens/login/Login';
import Rigister from './src/screens/register/Rigister';

function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Rigister />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
