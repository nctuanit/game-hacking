import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Heading({type = true}) {
  // console.log(type);
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 25, height: 25, marginRight: 30}}
          source={require('../assets/icon/menu.png')}
        />
        {type ? (
          <View style={styles.content}>
            <Text style={styles.text}>Tổng xu: </Text>
            <Text style={styles.text}>0</Text>
          </View>
        ) : (
          ''
        )}
      </View>
      <Image
        style={{width: 25, height: 25, marginRight: 0}}
        source={require('../assets/icon/back.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 27,
  },
});

export default Heading;
