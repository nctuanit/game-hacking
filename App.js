import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/screens/login/Login';
import Rigister from './src/screens/register/Rigister';
import ListSection from './src/screens/listSection/ListSection';
import ListGame from './src/screens/listGame/ListGame';
import Game from './src/screens/game/Game';

function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Rigister /> */}
      {/* <ListSection /> */}
      {/* <ListGame /> */}
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
