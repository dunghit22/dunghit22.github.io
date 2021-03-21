import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
function passwordScreens({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          style={{height: 160, width: 250}}
          source={require('../Image/logo.png')}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={{marginTop: 40, marginLeft: 50, fontSize: 16}}>
            Email Đã Đăng Kí
          </Text>
          <TextInput
            placeholder="Nhập Email "
            style={styles.Email}
            onChangeText={(text) => onChangeText(text)}
          />
        </View>
        <View>
          <Text style={{marginTop: 40, marginLeft: 50, fontSize: 16}}>
            Nhập Mã Xác Nhận
          </Text>
          <TextInput
            placeholder="Nhập Mã  "
            style={styles.Capcha}
            onChangeText={(text) => onChangeText(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.reset}>
            <Text style={{color: 'white', fontSize: 16}}>
              {' '}
              Gửi Lại Mật Khẩu
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 180, marginLeft: 90}}>
          <Text style={{fontSize: 16}}>Bạn Chưa Có Tài Khoản!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signScreens')}>
            <Text style={{color: 'red', marginLeft: 5, fontSize: 16}}>
              Đăng Kí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#002581',
    height: 250,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 2,
  },
  Email: {
    marginLeft: 50,
    borderBottomWidth: 1,
    height: 40,
    width: 280,
  },
  Capcha: {
    borderBottomWidth: 1,
    height: 40,
    width: 280,
    marginLeft: 50,
  },
  reset: {
    backgroundColor: '#002581',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 20,
    marginLeft: 120,
  },
});

export default passwordScreens;
