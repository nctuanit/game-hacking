import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setShowMenu} from '../store/tabSlice';
import {removeUserInfo, userInfoSelector} from '../store/userSlice';
import {removeToken} from '../utils/AsyncStorage';

function Menu({navigation}) {
  const dispath = useDispatch();
  const userInfo = useSelector(userInfoSelector);

  const handleHideMenu = () => {
    dispath(setShowMenu(false));
  };
  const handleLogout = () => {
    removeToken();
    handleHideMenu();
    dispath(removeUserInfo());
  };
  const handleMoveHome = () => {
    navigation.navigate('ListSection');
    handleHideMenu();
  };
  return (
    <View style={styles.menu}>
      <View style={styles.wrapper}>
        <View style={styles.layoutTop}>
          <Text style={{fontSize: 23, color: '#000'}}>Xin chào,</Text>
          <Text style={{fontSize: 23, color: '#000', fontWeight: 'bold'}}>
            {userInfo?.username}
          </Text>
        </View>
        <View style={styles.layoutBody}>
          <TouchableOpacity style={styles.itemTab} onPress={handleMoveHome}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/home.png')}
            />
            <Text style={styles.itemtabText}>Trang chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTab}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/zalo.jpg')}
            />
            <Text style={styles.itemtabText}>Zalo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTab}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/telegram.png')}
            />
            <Text style={styles.itemtabText}>Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTab} onPress={handleLogout}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/power.png')}
            />
            <Text style={styles.itemtabText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{width: '20%'}}
        onPress={handleHideMenu}></TouchableOpacity>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  layoutTop: {
    flex: 1,
    padding: 30,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1.5,
  },
  layoutBody: {
    flex: 6,
    padding: 30,
  },
  itemTab: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  itemtabText: {
    fontSize: 23,
    color: '#000',
    marginLeft: 15,
  },
});
