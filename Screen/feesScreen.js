import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function feesScreen({navigation}) {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View>
      <View style={styles.Header}>
        <View style={{width: 40}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../Image/menu.png')}
              style={{height: 20, width: 20, marginLeft: 10, marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 330}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Thanh toán phí, lệ phí
          </Text>
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
        <View style={styles.bottom}>
          <Text style={styles.Text}>Loại phí/ lệ phí</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.userName}
              onChangeText={text => onChangeText(text)}
            />
            <TouchableOpacity>
              <Image
                source={require('../Image/vnguoc.png')}
                style={{height: 20, width: 20, marginTop: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.Text}>Tên phí/ lệ phí</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.userName}
              onChangeText={text => onChangeText(text)}
            />
            <TouchableOpacity>
              <Image
                source={require('../Image/vnguoc.png')}
                style={{height: 20, width: 20, marginTop: 15, marginLeft: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.Text}>Mức phí</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.userName}
              onChangeText={text => onChangeText(text)}
            />
            <TouchableOpacity>
              <Image
                source={require('../Image/vnguoc.png')}
                style={{height: 20, width: 20, marginTop: 15, marginLeft: 45}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#002581', fontSize: 17,marginLeft:10,marginBottom:5}}>
          Thông tin chuyển khoản
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.Text}>Số tài khoản</Text>
          <TextInput
            style={styles.userName}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
            width: 380,
            marginLeft: 10,
            height: 70,
          }}>
          <Text style={styles.Text}>Ngân hàng</Text>
          <TextInput
            style={styles.userName}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.Text}>Chủ tài khoản</Text>
          <TextInput
            style={styles.userName}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
            width: 380,
            marginLeft: 10,
            height: 90,
          }}>
          <View>
            <Text style={styles.Text}>Nội dung</Text>
            <Text style={{fontSize: 16}}>chuyển khoản</Text>
          </View>
          <TextInput
            style={styles.userName}
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color:'white',fontSize:24}}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#002581',
    flexDirection: 'row',
    height: 50,
  },
  Body: {
    backgroundColor: 'white',
  },
  userName: {
    height: 50,
    width: 220,
    marginLeft: 30,
  },
  bottom: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: 380,
    marginLeft: 10,
  },
  Text: {
    fontSize: 16,
    marginTop: 10,
    
  },
  footer: {
    marginTop: 5,
    backgroundColor: 'white',
  },
  button:{
    backgroundColor:'#002581',
    height:40,
    width:350,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:19,
    marginLeft:20,
    marginTop:200
  }
});
export default feesScreen;
