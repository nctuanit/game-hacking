import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/screens/login/Login';
import Rigister from './src/screens/register/Rigister';
import ListSection from './src/screens/listSection/ListSection';
import ListGame from './src/screens/listGame/ListGame';
import Game from './src/screens/game/Game';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Rigister" component={Rigister} />
            <Stack.Screen name="ListSection" component={ListSection} />
            <Stack.Screen name="ListGame" component={ListGame} />
            <Stack.Screen name="Game" component={Game} />
            {/* <Login /> */}
            {/* <Rigister /> */}
            {/* <ListSection /> */}
            {/* <ListGame /> */}
            {/* <Game /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
