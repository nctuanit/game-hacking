import React from 'react';
import {StyleSheet, View} from 'react-native';
import {store} from './src/store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Index from './src/screens';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Index />
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
