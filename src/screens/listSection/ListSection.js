import React, {useEffect, useState} from 'react';
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
import {getListCategory} from '../../services/categoryServices';

function ListSection({navigation}) {
  const [listCategory, setListCategory] = useState([]);
  const dispath = useDispatch();
  const isShowMenu = useSelector(ismenu);

  useEffect(() => {
    getListCategory()
      .then(res => {
        // console.log('danh sách sảnh:🚨🚨🚨', res.data);
        setListCategory(res.data);
      })
      .catch(err => {
        console.log('thong bao loi lay sanh sach sanh:', err);
      });
  }, []);

  const handleSelecGame = item => {
    // console.log('kiem tra selector game', item);
    dispath(setGameSelector(item));
    navigation.navigate('ListGame');
  };

  const Item = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={e => handleSelecGame(item)}>
        <Image
          style={{
            width: '100%',
            height: 70,
            borderRadius: 8,
            resizeMode: 'stretch', // Sử dụng 'cover' hoặc giá trị khác của resizeMode tùy thuộc vào yêu cầu của bạn
          }}
          source={{
            uri: `https://api.hackinggame.tuannc.com/public/${item.image}`,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Heading navigation={navigation} back={false} />
      <FlatList
        data={listCategory}
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
