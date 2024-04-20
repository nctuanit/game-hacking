import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Heading from '../../components/Heading';
import * as Progress from 'react-native-progress';

function Game() {
  return (
    <View style={styles.game}>
      <Heading type={false} />
      <View style={styles.avataGame}>
        <Image
          style={{flex: 1, width: '100%', borderRadius: 8}}
          source={require('../../assets/img/poster.jpeg')}
        />
      </View>
      <View style={styles.WrapperControl}>
        <View style={styles.totalCoin}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>TỔNG XU:</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
            100
          </Text>
        </View>
        <View style={styles.boxControl}>
          <View style={styles.boxContainer}>
            <Text style={styles.TimeText}>12:00</Text>
            <Text style={{marginHorizontal: 5, fontSize: 18}}>-</Text>
            <Text style={styles.TimeText}>12:08</Text>
          </View>
          <View style={{width: 15}}></View>
          <View style={{position: 'relative'}}>
            <Progress.Bar
              progress={0.5}
              animated={true}
              height={50}
              useNativeDriver={true}
              color={'#4e7bbf'}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 17,
                fontWeight: 'bold',
                top: 15,
                right: 15,
              }}>
              50%
            </Text>
          </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: 'column',
  },
  avataGame: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxContainer: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#414141',
    borderRadius: 8,
    // padding: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TimeText: {fontSize: 18},
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
  },
});

export default Game;
