import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Heading from '../../components/Heading';
import * as Progress from 'react-native-progress';
import {useDispatch, useSelector} from 'react-redux';
import {selectorRoomGame} from '../../store/gameSlice';
import {gameDetail} from '../../services/gameServices';
import { ismenu } from '../../store/tabSlice';
import Menu from '../../components/Menu';

function Game({navigation}) {
  const [gameinfo, setGameInfo] = useState({});
  const isShowMenu = useSelector(ismenu);
  const roomsGameInfo = useSelector(selectorRoomGame);
  // console.log('thong tin phong game 😇😇😇😇:', roomsGameInfo);
  useEffect(() => {
    gameDetail(roomsGameInfo._id)
      .then(res => {
        setGameInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [roomsGameInfo]);
  return (
    <ImageBackground
      source={require('../../assets/img/background.jpg')}
      resizeMode="cover"
      style={styles.game}>
      <Heading navigation={navigation} type={false} bg={'#fff'} />
      <View style={styles.avataGame}>
        <Image
          style={{height: 230, width: 230, borderRadius: 8}}
          resizeMode="stretch"
          source={{
            url: `https://api.hackinggame.tuannc.com/public/${gameinfo?.image}`,
          }}
        />
      </View>
      <View style={styles.WrapperControl}>
        {/* <View style={styles.totalCoin}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>TỔNG XU:</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
            100
          </Text>
        </View> */}
        <View style={styles.boxControl}>
          <ImageBackground
            source={require('../../assets/img/KHUNG_PHAN_TRAM.png')}
            resizeMode="stretch"
            style={styles.BoxProgress}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              50%
            </Text>
          </ImageBackground>
          <View style={{width: 15}}></View>
          <ImageBackground
            source={require('../../assets/img/KHUNG_GIO.png')}
            resizeMode="stretch"
            style={styles.boxContainer}>
            <Text style={styles.TimeText}>12:00</Text>
            <Text style={{marginHorizontal: 5, fontSize: 18, color: '#fff'}}>
              -
            </Text>
            <Text style={styles.TimeText}>12:08</Text>
          </ImageBackground>
        </View>
        <View style={styles.Boxsubmit}>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Nhận khung giờ
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.note}>
          <Text style={styles.textNote}>
            Khung giờ được active với tài khoản : "hoangca".
          </Text>
          <Text style={styles.textNote}>
            Vui lòng quay đúng tài khoản à cổng game để đảm bảo kết quả.
          </Text>
        </View>
      </View>
      {isShowMenu ? <Menu navigation={navigation} /> : ''}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: 'column',
  },
  avataGame: {
    flex: 1.5,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WrapperControl: {
    flexDirection: 'column',
    flex: 2,
  },
  totalCoin: {
    // flex: 1,
    marginTop: 20,
    padding: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#414141',
    borderRadius: 8,
    // backgroundColor: '#aec5e9',
  },
  boxControl: {
    // flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxContainer: {
    flex: 1,
    // borderWidth: 1.5,
    // borderColor: '#414141',
    borderRadius: 8,
    paddingBottom: 12,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxProgress: {
    width: 120,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TimeText: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  Boxsubmit: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#6e37b5',
  },
  btnSubmit: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#6e37b5',
    // borderWidth: 1.5,
    // borderColor: '#414141',
    borderRadius: 8,
  },
  note: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  textNote: {
    fontSize: 15,
    color: '#fff',
  },
});

export default Game;
