import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Login({navigation}) {
  const [userNanme, onChangeUsername] = useState('');
  const [pass, onChangePass] = useState('');
  const [isSelected, setSelection] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const isPhoneNumber = value => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(value);
  };

  const onSubmit = data => {
    console.log('dữ liệu đăng ký user:', data);
    // navigation.navigate('ListSection')
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Đăng nhập</Text>
        </View>
        <ImageBackground
          style={styles.avata}
          resizeMode="cover"
          source={require('../../assets/img/bg-avt.jpg')}>
          <Image
            style={styles.img_avt}
            source={require('../../assets/img/avt.jpeg')}
          />
        </ImageBackground>
        <View style={styles.boxInput}>
          <View style={styles.wrapIput}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/user.png')}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Tên đăng nhập"
                />
              )}
              name="userNanme"
              rules={{required: true}}
            />
          </View>
          {errors.userNanme?.type == 'required' && (
            <Text>Vui lòng không bỏ trống</Text>
          )}
          <View style={[styles.wrapIput, {marginTop: 20}]}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/lock.png')}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Mật khẩu"
                />
              )}
              name="password"
              rules={{required: true}}
            />
            <Image
              style={styles.icon}
              source={require('../../assets/icon/eye.png')}
            />
          </View>
        </View>
        <View style={styles.boxRemember}>
          {isSelected ? (
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/icon/unchecked.png')}
            />
          ) : (
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/icon/checkbox.png')}
            />
          )}
          <Text style={{fontSize: 20, color: '#7c4dff', marginLeft: 23}}>
            Ghi nhớ tài khoản
          </Text>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnSubmit}>Đăng nhập</Text>
        </TouchableOpacity>
        {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text >Sign in with Facebook</Text>
      </LinearGradient> */}

        <View style={styles.footer}>
          <Text style={{fontSize: 17, color: '#7035a5', marginRight: 10}}>
            Bạn đã có tài khoản chưa?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Rigister')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#7035a5'}}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // height: '100%',
  },
  heading: {
    // flex: 1
    paddingVertical: 40,
  },
  headingText: {
    color: '#5535af',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avata: {
    // flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  img_avt: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
  },
  boxInput: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  wrapIput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f1e6ff',
    overflow: 'hidden',
    paddingHorizontal: 25,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f1e6ff',
    fontSize: 20,
    color: '#000',
  },
  icon: {
    width: 25,
    height: 25,
  },
  boxRemember: {
    flexDirection: 'row',
    justifyContent: 'start',
    paddingHorizontal: 70,
    paddingVertical: 20,
  },
  submit: {
    marginHorizontal: 60,
    backgroundColor: '#6e37b5',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 50,
  },
  btnSubmit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 70,
    paddingVertical: 20,
  },
});

export default Login;
