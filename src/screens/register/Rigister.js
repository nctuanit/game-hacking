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
  FlatList,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Rigister({navigation}) {
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
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Đăng ký</Text>
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
                  placeholder="Nhập tên tài khoản"
                />
              )}
              name="userNanme"
              rules={{required: true}}
            />
          </View>
          {errors.userNanme?.type == 'required' && (
            <Text>Vui lòng không bỏ trống</Text>
          )}
          <View style={[styles.wrapIput, {marginTop: 15}]}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/call.png')}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Nhập số điện thoại"
                />
              )}
              name="phone"
              rules={{required: true, validate: isPhoneNumber}}
            />
          </View>
          {errors.phone?.type == 'required' && (
            <Text>Vui lòng không bỏ trống</Text>
          )}
          {errors.phone?.type == 'validate' && (
            <Text>Vui lòng nhập đúng số điện thoại</Text>
          )}
          <View style={[styles.wrapIput, {marginTop: 15}]}>
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
              rules={{required: true, validate: isPhoneNumber}}
            />
            <Image
              style={styles.icon}
              source={require('../../assets/icon/eye.png')}
            />
          </View>
          {errors.phone?.type == 'required' && (
            <Text>Vui lòng không bỏ trống</Text>
          )}
          <View style={[styles.wrapIput, {marginTop: 15}]}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/lock.png')}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={onChangePass}
              value={pass}
              placeholder="Nhập lại mật khẩu"
            />
            <Image
              style={styles.icon}
              source={require('../../assets/icon/eye.png')}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btnSubmit}>Đăng ký</Text>
        </TouchableOpacity>
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
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
  },
  headingText: {
    color: '#5535af',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avata: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 250,
    justifyContent: 'center',
  },
  img_avt: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    // elevation: 9,
  },
  boxInput: {
    paddingTop: 15,
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
  submit: {
    marginHorizontal: 60,
    backgroundColor: '#6e37b5',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  btnSubmit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Rigister;
