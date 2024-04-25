import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Heading from '../../components/Heading';
import {useDispatch, useSelector} from 'react-redux';
import {selectorGame, setRoomGameSelector} from '../../store/gameSlice';
import {getListGameById} from '../../services/gameServices';
import Menu from '../../components/Menu';
import {ismenu} from '../../store/tabSlice';

function ListGame({navigation}) {
  const [listGame, setListGame] = useState([]);
  const dispath = useDispatch();
  const gameSelector = useSelector(selectorGame);
  const isShowMenu = useSelector(ismenu);
  // console.log('id của phòng game 🚨🚨🚨:', gameSelector._id);
  useEffect(() => {
    getListGameById(gameSelector._id)
      .then(res => {
        // console.log('danh sach phong game 🚨🚨🚨:', res.data);
        setListGame(res.data);
      })
      .catch(err => {
        console.log('loi danh sach phong game:', err);
      });
  }, []);

  const handleSelecGame = item => {
    dispath(setRoomGameSelector(item));
    navigation.navigate('Game');
  };

  const Item = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelecGame(item)}>
      <View style={styles.itemContent}>
        <Image
          style={{
            width: '100%',
            height: 100,
            borderRadius: 8,
            resizeMode: 'stretch',
          }}
          source={{
            uri: `https://api.hackinggame.tuannc.com/public/${item.image}`,
          }}
        />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading navigation={navigation} />
      <FlatList
        data={listGame}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item._id}
        numColumns={2}
        style={styles.wrapperList}
      />
      {isShowMenu ? <Menu navigation={navigation} /> : ''}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  wrapperList: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent: {
    backgroundColor: '#f9c2ff',
    flex: 1,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f5fc',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  title: {
    marginTop: 20,
    fontSize: 17,
    // fontWeight: 600,
  },
});

export default ListGame;
