import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function lookUpRecords ({navigation}) {
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
          <Text style={{color: 'white', fontSize: 20}}>Tra cứu hồ sơ</Text>
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
        <View
          style={{
            flexDirection: 'row',
            height: 45,
            width: 330,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
            marginLeft: 20,
            marginTop: 15,
          }}>
          <View>
            <Image
              source={require('../Image/search.png')}
              style={{height: 25, width: 22, marginTop: 10}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Nhập mã số biên nhận"
              style={styles.TextInput}
              onChangeText={text => onChangeText(text)}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Image
                style={{width: 45, height: 45, marginLeft: 130, marginTop: 0}}
                source={require('../Image/window.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Tên thủ tục</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text>
              {' '}
              Cấp giấy xác nhận nội dung quảng cáo trang thiết bị y tế{' '}
            </Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Đơn vị tiếp nhận</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text> Vụ Trang thiết bị và Công trình y tế </Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Mã biên nhận</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text>000.00.04.G18-200727-0516 </Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Trạng thái</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text style={{color: '#F6A90F', fontWeight: 'bold'}}>
              {' '}
              Chờ xử lí
            </Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Ngày nộp</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text>24/07/2020 10:47</Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Ngày tiếp nhận</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text>24/07/2020 10:47</Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Hẹn ngày trả </Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text> 29/07/2020</Text>
          </View>
        </View>
        <View style={styles.thongTin}>
          <View style={{height: 70, width: 150, justifyContent: 'center'}}>
            <Text style={styles.Text}>Ngày trả kết quả</Text>
          </View>
          <View style={{justifyContent: 'center', height: 70, width: 230}}>
            <Text> 29/07/2020 </Text>
          </View>
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
  TextInput: {
    marginLeft: 10,
    fontSize: 15,
    height: 40,
  },
  Body: {
    backgroundColor: 'white',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  thongTin: {
    flexDirection: 'row',
    marginLeft: 20,
    height: 70,
    width: 390,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});
export default lookUpRecords;
