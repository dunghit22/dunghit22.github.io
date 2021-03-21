import React from 'react';
import {View, Button, Image, Text, TouchableOpacity} from 'react-native';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/HomeScreen';
import QAScreen from './Screen/QAScreen';
import {NavigationContainer} from '@react-navigation/native';
import lookUpRecords from './Screen/lookUpRecords';
import passwordScreen from './Screen/passwordScreen';
import signUp from './Screen/signUp';
import {createDrawerNavigator} from '@react-navigation/drawer';
import feesScreen from './Screen/feesScreen';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="login"
        drawerContent={navigation => (
          <View>
            <View
              style={{
                backgroundColor: '#002581',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                height: 90,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/Home.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Trang Chủ
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/i.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Thông tin chung
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/list.png')}
                  style={{height: 40, width: 40}}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                    Danh sách thủ tục hành
                  </Text>
                  <Text style={{fontSize: 18, marginLeft: 20, marginTop: 5}}>
                    chính
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/tracuu.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Tra cứu hồ sơ
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/quanly.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Quản lý hồ sơ
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Image
                source={require('./Image/gack.png')}
                style={{width: 280, marginTop: 10}}
              />
            </View>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 5, marginLeft: 15}}>
                <Image
                  source={require('./Image/support.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Hướng dẫn & Hỗ trợ
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/thongtindk.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Thông tin đăng ký
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/thietlap.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Thiết lập ứng dụng
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/dangnhap.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Đăng Nhập
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
                <Image
                  source={require('./Image/dangky.png')}
                  style={{height: 40, width: 40}}
                />
                <Text style={{fontSize: 18, marginTop: 10, marginLeft: 20}}>
                  Đăng ký
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}>
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="QAScreen"
          component={QAScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="lookUpRecord"
          component={lookUpRecords}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="password"
          component={passwordScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="signUp"
          component={signUp}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="fees"
          component={feesScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
