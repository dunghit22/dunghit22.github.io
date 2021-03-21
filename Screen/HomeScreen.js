import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={{marginLeft: 0, marginTop: 0, height: 90, width: 50}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{height: 30, width: 30, marginTop: 20, marginLeft: 15}}
              source={require('../Image/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 150,
            weight: 250,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 160, width: 240, marginLeft: 30, marginTop: 30}}
            source={require('../Image/logo.png')}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.iTem}>
          <View style={styles.iCon}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 60, marginLeft: 57, marginTop: 15}}
                source={require('../Image/icon1.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 23,
                marginTop: 5,
                fontSize: 18,
                color: '#002581',
              }}>
              Thông tin chung
            </Text>
          </View>
          <View style={styles.iCon}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 60, marginLeft: 62, marginTop: 15}}
                source={require('../Image/icon2.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 50,
                marginTop: 5,
                fontSize: 18,
                color: '#44a636',
              }}>
              Danh mục
            </Text>
            <Text style={{marginLeft: 18, fontSize: 18, color: '#44a636'}}>
              Thủ tục hành chính
            </Text>
          </View>
        </View>
        <View style={styles.iTem}>
          <View style={styles.iCon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('lookUpRecord')}>
              <Image
                style={{height: 50, width: 60, marginLeft: 60, marginTop: 15}}
                source={require('../Image/icon3.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                marginLeft: 35,
                color: '#f6a90f',
                marginTop: 5,
              }}>
              Tra cứu hồ sơ
            </Text>
          </View>
          <View style={styles.iCon}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 60, marginLeft: 60, marginTop: 15}}
                source={require('../Image/icon4.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                marginLeft: 35,
                color: '#E86657',
                marginTop: 5,
              }}>
              Quản lí hồ sơ
            </Text>
          </View>
        </View>
        <View style={styles.iTem}>
          <View
            style={{
              height: 120,
              width: 190,
              borderWidth: 1.5,
              borderColor: '#002581',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('fees')}>
              <Image
                style={{
                  height: 50,
                  width: 60,
                  marginLeft: 55,

                  marginTop: 20,
                }}
                source={require('../Image/icon5.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: '#0083E5',
                marginTop: 5,
              }}>
              Thanh toán phí, lệ phí
            </Text>
          </View>
          <View style={styles.iCon}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 60, marginLeft: 60, marginTop: 15}}
                source={require('../Image/icon6.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                marginLeft: 55,
                color: '#E8577A',
                marginTop: 5,
              }}>
              Báo cáo
            </Text>
          </View>
        </View>
        <View style={styles.iTem}>
          <View style={styles.iCon}>
            <TouchableOpacity onPress={() => navigation.navigate('QAScreen')}>
              <Image
                style={{height: 50, width: 60, marginLeft: 60, marginTop: 15}}
                source={require('../Image/icon7.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 25,
                fontSize: 18,
                color: '#C06BC6',
                marginTop: 5,
              }}>
              Hỏi Đáp, Góp ý
            </Text>
          </View>
          <View style={styles.iCon}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 60, marginLeft: 60, marginTop: 15}}
                source={require('../Image/icon8.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 18,
                color: '#11AAAF',
                marginTop: 5,
              }}>
              Hướng dẫn & Hỗ trợ
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#002581',
    height: 190,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  iCon: {
    height: 125,
    width: 190,
    borderWidth: 1.5,
    borderColor: '#002581',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  iTem: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
