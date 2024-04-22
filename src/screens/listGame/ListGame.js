import React from 'react';
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
import {selectorGame} from '../../store/gameSlice';

function ListGame({navigation}) {
  const gameSelector = useSelector(selectorGame);
  console.log(gameSelector);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/1.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/2.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/3.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/4.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/5.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/6.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/7.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/8.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/9.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/10.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7f',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/11.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7s',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/12.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7b',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/13.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7b',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/14.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7b',
      title: 'PG Điện tử',
      img: require('../../assets/img/imggame/15.png'),
    },
  ];
  const Item = ({img}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Game')}>
      <View style={styles.itemContent}>
        <Image
          style={{width: '100%', height: 100, borderRadius: 8}}
          source={img}
        />
        {/* <Text style={styles.title}>{title}</Text> */}
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading navigation={navigation} />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item img={item.img} />}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.wrapperList}
      />
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
    fontWeight: 600,
  },
});

export default ListGame;
