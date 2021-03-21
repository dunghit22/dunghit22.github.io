import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

function LoginScreen({navigation}) {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          style={{height: 160, width: 250}}
          source={require('../Image/logo.png')}
        />
      </View>
      <View style={styles.body}>
        <Text
          style={{fontSize: 18, marginLeft: 50, marginTop: 50, color: 'black'}}>
          Tên Truy Nhập
        </Text>
        <View>
          <TextInput
            style={styles.userName}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <Text style={{fontSize: 18, marginLeft: 50, marginTop: 50}}>
          Mật Khẩu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            width: 300,
            marginLeft: 50,
            borderColor: '#E5E5E5',
          }}>
          <TextInput
            placeholder="*************"
            style={styles.TextInput}
            onChangeText={text => onChangeText(text)}
          />
          <TouchableOpacity>
            <Image
              source={require('../Image/eye.png')}
              style={{marginLeft: 170}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.login}>
            <Text style={{color: '#FFFFFF', fontSize: 23, fontWeight: 'bold'}}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>
        <View />
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('password')}>
            <Text style={styles.forget}>Quên Mật Khẩu !</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 70, marginTop: 70}}>
          <Text style={{fontSize: 16, color: '#878787'}}>
            Bạn Chưa Có Tài Khoản?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
            <Text style={{color: '#002581', fontSize: 16, marginLeft: 5}}>
              Đăng Kí!
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
    backgroundColor: 'white',
  },
  login: {
    height: 45,
    width: 160,
    backgroundColor: '#002581',
    marginLeft: 50,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    width: 300,
  },
  forget: {
    color: '#E86657',
    marginLeft: 130,
    fontSize: 16,
    marginTop: 10,
  },
  TextInput: {
    height: 40,
    fontSize: 20,
  },
  userName: {
    height: 40,
    width: 300,
    marginLeft: 50,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    fontSize:20
  },
});

export default LoginScreen;
