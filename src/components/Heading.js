import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setShowMenu} from '../store/tabSlice';
import {userInfoSelector} from '../store/userSlice';

function Heading({type = true, navigation, bg = 'transparent', back = true}) {
  const dispath = useDispatch();
  const handleShowMneu = () => {
    dispath(setShowMenu(true));
  };
  const user = useSelector(userInfoSelector);
  return (
    <View style={[styles.header, {backgroundColor: `${bg}`}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={handleShowMneu}>
          <Image
            style={{width: 25, height: 25, marginRight: 30}}
            source={require('../assets/icon/menu.png')}
          />
        </TouchableOpacity>
        {type ? (
          <View style={styles.content}>
            <Text style={styles.text}>Tổng xu: </Text>
            <Text style={styles.text}>{user?.balance}</Text>
          </View>
        ) : (
          ''
        )}
      </View>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 25, height: 25, marginRight: 0}}
            source={require('../assets/icon/back.png')}
          />
        </TouchableOpacity>
      ) : (
        ''
      )}
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
