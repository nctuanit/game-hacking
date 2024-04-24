import React, {useEffect} from 'react';
import Login from './login/Login';
import Rigister from './register/Rigister';
import ListSection from './listSection/ListSection';
import ListGame from './listGame/ListGame';
import Game from './game/Game';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getToken} from '../utils/AsyncStorage';
import {infoAccount} from '../services/authServices';
import {setUserInfo, userInfoSelector} from '../store/userSlice';

function Index() {
  const Stack = createNativeStackNavigator();
  const dispath = useDispatch();

  const userInfo = useSelector(userInfoSelector);

  const retrieveToken = async () => {
    try {
      const token = await getToken();
      if (token) {
        infoAccount()
          .then(res => {
            // console.log('thong tin user 😇😇😇😇😇', res.data);
            dispath(setUserInfo(res.data));
          })
          .catch(err => {
            // console.log('thong bao loi khong lay duoc thong tin user:', err);
          });
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  //   console.log('kiem tra thong tin user :', userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userInfo ? (
          <>
            <Stack.Screen name="ListSection" component={ListSection} />
            <Stack.Screen name="ListGame" component={ListGame} />
            <Stack.Screen name="Game" component={Game} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Rigister" component={Rigister} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;
