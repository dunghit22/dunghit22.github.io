import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function QAScreen({navigation}) {
  const data ={
    
  };
  return (
    <View>
      <View style={styles.Header}>
           
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
  button: {
    height: 30,
    width: 250,
    backgroundColor: '#002581',
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  first: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    height: 70,
    justifyContent: 'center',
    marginLeft: 20,
  },
  colorText: {
    color: '#333333',
  },
  seCond: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    height: 90,
    justifyContent: 'center',
    marginLeft: 20,
  },
});
export default QAScreen;
{/* <View style={{width: 40}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../Image/menu.png')}
              style={{height: 20, width: 20, marginLeft: 10, marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 330}}>
          <Text style={{color: 'white', fontSize: 20}}>Câu hỏi thường gặp</Text>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 40}}>
          <TouchableOpacity>
            <Image
              source={require('../Image/bluSearch.png')}
              style={{height: 30, width: 30, marginTop: 8}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Body}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Lĩnh vực Bảo hiểm y tế
          </Text>
        </TouchableOpacity>
        <View style={styles.first}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 1:</Text>
            <Text style={styles.colorText}>Bảo hiểm y tế là gì?</Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              Xin giải đáp cho tôi bảo hiểm y tế là gì
            </Text>
          </View>
        </View>
        <View style={styles.first}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 2:</Text>
            <Text style={styles.colorText}>Bảo hiểm y tế là gì?</Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              Xin giải đáp cho tôi bảo hiểm y tế là gì
            </Text>
          </View>
        </View>
        <View style={styles.first}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 3:</Text>
            <Text style={styles.colorText}>Bảo hiểm y tế là gì?</Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              Xin giải đáp cho tôi bảo hiểm y tế là gì
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Body2}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Lĩnh vực Hợp tác quốc tế
          </Text>
        </TouchableOpacity>
        <View style={styles.seCond}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 1:</Text>
            <Text style={styles.colorText}>
              {' '}
              Đơn vị tôi muốn tổ chức Hội nghị/Hội thảo
            </Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              quốc tế trong lĩnh vực y tế tại Việt Nam, tôi phải liên
            </Text>
            <Text style={{color: '#333333', marginTop: 2}}>
              hệ với cơ quan nào để xin phép?
            </Text>
          </View>
        </View>
        <View style={styles.seCond}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 2:</Text>
            <Text style={styles.colorText}>
              {' '}
              Đơn vị tôi muốn tổ chức Hội nghị/Hội thảo
            </Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              quốc tế trong lĩnh vực y tế tại Việt Nam, tôi phải liên
            </Text>
            <Text style={{color: '#333333', marginTop: 2}}>
              hệ với cơ quan nào để xin phép?
            </Text>
          </View>
        </View>
        <View style={styles.seCond}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 3:</Text>
            <Text style={styles.colorText}>
              {' '}
              Đơn vị tôi muốn tổ chức Hội nghị/Hội thảo
            </Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              quốc tế trong lĩnh vực y tế tại Việt Nam, tôi phải liên
            </Text>
            <Text style={{color: '#333333', marginTop: 2}}>
              hệ với cơ quan nào để xin phép?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Body2}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Lĩnh vực Hợp tác quốc tế
          </Text>
        </TouchableOpacity>
        <View style={styles.seCond}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 1:</Text>
            <Text style={styles.colorText}>
              {' '}
              Đơn vị tôi muốn tổ chức Hội nghị/Hội thảo
            </Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              quốc tế trong lĩnh vực y tế tại Việt Nam, tôi phải liên
            </Text>
            <Text style={{color: '#333333', marginTop: 2}}>
              hệ với cơ quan nào để xin phép?
            </Text>
          </View>
        </View>
        <View style={styles.seCond}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#002581'}}> Câu hỏi 2:</Text>
            <Text style={styles.colorText}>
              {' '}
              Đơn vị tôi muốn tổ chức Hội nghị/Hội thảo
            </Text>
          </View>
          <View>
            <Text style={{color: '#333333', marginTop: 2}}>
              quốc tế trong lĩnh vực y tế tại Việt Nam, tôi phải liên
            </Text>
            <Text style={{color: '#333333', marginTop: 2}}>
              hệ với cơ quan nào để xin phép?
            </Text>
          </View>
        </View>
      </View> */}
