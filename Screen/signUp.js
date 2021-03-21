import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

function signUp ({navigation}){
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View>
      <View style={styles.Header}>
        <View style={{width: 40}}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image
              source={require('../Image/menu.png')}
              style={{height: 20, width: 20, marginLeft: 10, marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 330}}>
          <Text style={{color: 'white', fontSize: 20}}>Đăng ký tài khoản</Text>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 40}}>
          <TouchableOpacity>
            <Image
              source={require('../Image/chuong.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Body}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Email:</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Tên công ty</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Tỉnh/Thành phố</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
          <TouchableOpacity>
            <Image
              source={require('../Image/vnguoc.png')}
              style={{
                backgroundColor: 'yellow',
                marginLeft: 320,
                marginTop: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Quận/huyện</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
          <TouchableOpacity>
            <Image
              source={require('../Image/vnguoc.png')}
              style={{
                backgroundColor: 'yellow',
                marginLeft: 320,
                marginTop: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Phường/xã</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
          <TouchableOpacity>
            <Image
              source={require('../Image/vnguoc.png')}
              style={{
                backgroundColor: 'yellow',
                marginLeft: 320,
                marginTop: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Địa chỉ chi tiết</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Số điện thoại liên hệ</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Giấy ĐKKD số</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput onChangeText={text => onChangeText(text)} />
        </View>
        <View style={styles.cloud}>
          <Image
            source={require('../Image/cloud.png')}
            style={{
              height: 35,
              width: 35,
              marginLeft: 5,
              marginTop: 2,
              borderRadius: 10,
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 5}}>
            <Text> Tải lên Giấy chứng nhận đăng ký kinh doanh</Text>
            <Text>(đăng ký doanh nghiệp)</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Text style={{color: '#747474'}}>Nhập mã xác nhận </Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View>
          <TextInput
            style={styles.capCha}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
          <Text style={{color: '#747474'}}>
            {' '}
            Ghi chú : Những trường thông tin dấu
          </Text>
          <Text style={{color: 'red'}}> * </Text>
          <Text style={{color: '#747474'}}> là bắt buộc </Text>
        </View>
        <View style={styles.Button}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                paddingTop: 3,
                marginLeft: 45,
              }}>
              Đăng Ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#002581',
    flexDirection: 'row',
    height: 50,
  },

  Body: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    height: 30,
    width: 370,
    marginLeft: 10,
    flexDirection: 'row',
  },
  Text: {
    marginLeft: 10,
    marginTop:5
  },
  cloud: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#002581',
    height: 40,
    width: 370,
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  capCha: {
    height: 40,
    width: 150,
    marginLeft: 30,
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 0.5,
    fontSize: 1,
  },
  Button: {
    backgroundColor: '#002581',
    height: 30,
    width: 150,
    borderRadius: 16,
    marginLeft: 120,
    marginTop: 10,
  },
});
export default signUp;
