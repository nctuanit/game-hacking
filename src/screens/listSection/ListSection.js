import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import Menu from '../../components/Menu';
import {ismenu} from '../../store/tabSlice';
import {setGameSelector} from '../../store/gameSlice';

function ListSection({navigation}) {
  const dispath = useDispatch();
  const isShowMenu = useSelector(ismenu);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh1.png'),
      game: require('../../assets/img/imggame/1.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh2.png'),
      game: require('../../assets/img/imggame/2.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh3.png'),
      game: require('../../assets/img/imggame/3.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh4.png'),
      game: require('../../assets/img/imggame/4.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh5.png'),
      game: require('../../assets/img/imggame/5.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh6.png'),
      game: require('../../assets/img/imggame/6.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh7.png'),
      game: require('../../assets/img/imggame/7.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh8.png'),
      game: require('../../assets/img/imggame/8.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh9.png'),
      game: require('../../assets/img/imggame/9.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh10.png'),
      game: require('../../assets/img/imggame/10.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7f',
      title: 'PG Điện tử',
      img: require('../../assets/img/imgsanh/sanh11.png'),
      game: require('../../assets/img/imggame/11.png'),
    },
  ];

  const handleSelecGame = item => {
    console.log('kiem tra selector game', item);
    dispath(setGameSelector(item));
    navigation.navigate('ListGame')
  };

  // console.log('kiem tra is show menu:', isShowMenu);
  const Item = ({img, game}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={e => handleSelecGame(game)}>
        <Image
          style={{
            width: '100%',
            height: 70,
            borderRadius: 8,
            resizeMode: 'stretch',
          }}
          source={img}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Heading navigation={navigation} />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item img={item.img} game={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.wrapperList}
      />
      {isShowMenu ? <Menu /> : ''}
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
    // height: 90,
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'transparent'
  },
  title: {
    marginTop: 20,
    fontSize: 15,
  },
});

export default ListSection;
