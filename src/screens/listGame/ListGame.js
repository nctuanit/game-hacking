import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import Heading from '../../components/Heading';

function ListGame() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'PG Điện tử',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7f',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7s',
      title: 'PG Điện tử',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7b',
      title: 'PG Điện tử',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Image
          style={{width: '100%', height: 100}}
          source={require('../../assets/img/poster.jpeg')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Heading />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
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
