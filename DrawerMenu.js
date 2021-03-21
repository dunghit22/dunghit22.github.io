// import React, { useEffect } from 'react';
// import { Alert } from 'react-native';
// import { Platform } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import messaging from '@react-native-firebase/messaging';

// import { useSelector } from 'react-redux';

// import { navigationRef } from './NavigationService';

// import Login from 'app/screens/Login';
// import ForgotPass from 'app/screens/ForgotPassWord';
// import Dangky from 'app/screens/Dangky';
// //can bo
// import HomeCanBo from 'app/screens/CanBo/Home';
// import ThongKe from 'app/screens/CanBo/ThongKe';
// import ChiTietHoSoCB from 'app/screens/CanBo/ChiTietHS';
// import XuLyCongViec from 'app/screens/CanBo/XuLyCongViec';
// import BaoCao from '../screens/CanBo/BaoCao';
// import CongBo from '../screens/CanBo/CongBo';
// import DrawerContent from '../components/DrawerContent';
// import XuLyChiTiet from '../screens/CanBo/ChiTietHS/PhongBanxuly';
// import CanBoXuLy from '../screens/CanBo/ChiTietHS/canboxuly';
// import TheoDoiHoSo from '../screens/CanBo/TheoDoiHoSo';
// import ThongBaoXuLy from '../screens/CanBo/XuLyCongViec/ThongBao';


// // cong dan,doanh nghiep
// import HomeCongDan from 'app/screens/CongDan/Home';
// import NopHoSo from 'app/screens/CongDan/NopHoSo';
// import TraCuu from 'app/screens/CongDan/TraCuu';
// import ChiTietThuTuc from 'app/screens/CongDan/ChiTietThuTuc';
// import LinhVuc from 'app/screens/CongDan/LinhVuc';
// import TTHC from 'app/screens/CongDan/TTHC';
// import ListThuTuc from 'app/screens/CongDan/LinhVuc/ListThuTuc';
// import DrawerCongDan from '../components/DrawerCongDan';
// import ThemeController from '../components/ThemeController';
// import QuanLy from 'app/screens/CongDan/QuanLyHoso';
// import ChiTietHoSo from 'app/screens/CongDan/ChiTietHoSo';
// import thongTinHoSoChiTiet from '../screens/CongDan/NopHoSo/chiTiet';
// import XemGiayTo from '../screens/CongDan/NopHoSo/xemGiayTo';
// import { StatusBar } from 'react-native';
// import ThongTinChung from '../screens/CongDan/ThongTinChung';
// import HuongDan from '../screens/CongDan/HuongDan';
// import ThanhToanScreen from '../screens/CongDan/ThanhToan';
// import ThongTinThanhToan from '../screens/CongDan/ThanhToan/ThongTinThanhToan';
// import ChiTietThongTin from '../screens/CongDan/ThongTinChung/info';
// import TimKiemThuTuc from '../screens/CongDan/TTHC/searchTT';
// import ThongTinTaiKhoan from '../screens/CongDan/ThongTinTaiKhoan';
// import HuyHoSo from '../screens/CongDan/ChiTietHoSo/HuyHoSo';
// import ChinhSuaHoSo from '../screens/CongDan/SuaHoSo';
// import NopLaiHoSo from '../screens/CongDan/SuaHoSo/chiTiet';
// import KqTimKiemTTHC from '../screens/CongDan/TTHC/resultSearch';
// import ThongBaoHoSo from '../screens/CongDan/QuanLyHoso/ThongBao';
// import ThongBaoThanhToan from '../screens/CongDan/ThanhToan/ThongBao';
// //khach
// import DrawerKhach from '../components/DrawerKhach';
// import BaoCaoKhach from '../screens/Khach/BaoCao';
// import HoiDapKhach from '../screens/Khach/HoiDap';
// import TimKiemHoiDapKhach from '../screens/Khach/HoiDap/timKiem';
// import NoiDungHoiDapKhach from '../screens/Khach/HoiDap/guiNoiDung';
// import resultSearchQuestion from '../screens/Khach/HoiDap/result';
// import TracuuKhach from '../screens/Khach/TraCuu';
// import TTHCKhach from '../screens/Khach/DanhMucTTHC';
// import HomeKhach from '../screens/Khach/Home';

// const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();
// function CanBoDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="HomeCanBo"
//       drawerContent={() => <DrawerContent />}>
//       <Drawer.Screen
//         name="HomeCanBo"
//         component={HomeCanBo}
//         options={{ drawerLabel: 'HomeCanBo' }}
//       />
//       <Drawer.Screen
//         name="ThongKe"
//         component={ThongKe}
//         options={{ drawerLabel: 'ThongKe' }}
//       />
//       <Drawer.Screen
//         name="XuLyCongViecfun"
//         component={XuLyCongViecfun}
//         options={{ drawerLabel: 'XuLyCongViecfun' }}
//       />
//       <Drawer.Screen
//         name="TraCuu"
//         component={TracuuKhach}
//         options={{ drawerLabel: 'Tra cứu' }}
//       />
//       <Drawer.Screen
//         name="ChiTietHoSoCB"
//         component={ChiTietHoSoCB}
//         options={{ drawerLabel: 'ChiTietHoSoCB' }}
//       />
//       <Drawer.Screen
//         name="XuLyChiTiet"
//         component={XuLyChiTiet}
//         options={{ drawerLabel: 'XuLyChiTiet' }}
//       />
//       <Drawer.Screen
//         name="BaoCao"
//         component={BaoCao}
//         options={{ drawerLabel: 'BaoCao' }}
//       />
//       <Drawer.Screen
//         name="ThongTinChung"
//         component={DSThongTin}
//         options={{ drawerLabel: 'Thông tin chung' }}
//       />
//       <Drawer.Screen
//         name="TheoDoifun"
//         component={TheoDoifun}
//         options={{ drawerLabel: 'Theo dõi hồ sơ' }}
//       />
//     </Drawer.Navigator>
//   );
// }

// function TheoDoifun() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="TheoDoiHoSo"
//         component={TheoDoiHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietHoSoCB"
//         component={ChiTietHoSoCB}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XuLyChiTiet"
//         component={XuLyChiTiet}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="CanBoXuLy"
//         component={CanBoXuLy}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XemGiayTo"
//         component={XemGiayTo}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function XuLyCongViecfun() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="XuLyCongViec"
//         component={XuLyCongViec}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietHoSoCB"
//         component={ChiTietHoSoCB}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XuLyChiTiet"
//         component={XuLyChiTiet}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="CanBoXuLy"
//         component={CanBoXuLy}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XemGiayTo"
//         component={XemGiayTo}
//         options={{ headerShown: false }}
//       />
//        <Stack.Screen
//         name="ThongBaoXuLy"
//         component={ThongBaoXuLy}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function CongDanDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="HomeCongDan"
//       drawerContent={() => <DrawerCongDan />}>
//       <Drawer.Screen
//         name="HomeCongDan"
//         component={HomeCongDan}
//         options={{ drawerLabel: 'HomeCongDan' }}
//       />
//       <Drawer.Screen
//         name="HoiDap"
//         component={DSHoiDapKhach}
//         options={{ drawerLabel: 'Hỏi Đáp' }}
//       />
//       <Drawer.Screen
//         name="NopHoSo"
//         component={NopHoSo}
//         options={{ drawerLabel: 'NopHoSo' }}
//       />
//       <Drawer.Screen
//         name="TraCuu"
//         component={TracuuKhach}
//         options={{ drawerLabel: 'Tra cứu' }}
//       />
//       <Drawer.Screen
//         name="LinhVuc"
//         component={DSLinhVuc}
//         options={{ drawerLabel: 'Lĩnh Vực' }}
//       />
//       <Drawer.Screen
//         name="TTHC"
//         component={DanhSachTT}
//         options={{ drawerLabel: 'Thủ tục H/C' }}
//       />
//       <Drawer.Screen
//         name="QuanLy"
//         component={QuanLyHoso}
//         options={{ drawerLabel: 'Quản lý hồ sơ' }}
//       />
//       <Drawer.Screen
//         name="ThongTinChung"
//         component={DSThongTin}
//         options={{ drawerLabel: 'Thông tin chung' }}
//       />
//       <Drawer.Screen
//         name="HuongDan"
//         component={HuongDan}
//         options={{ drawerLabel: 'HuongDan' }}
//       />
//       <Drawer.Screen
//         name="CongBo"
//         component={CongBo}
//         options={{ drawerLabel: 'CongBo' }}
//       />
//       <Stack.Screen
//         name="XemGiayTo"
//         component={XemGiayTo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThanhToan"
//         component={ThanhToan}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongTinTaiKhoan"
//         component={ThongTinTaiKhoan}
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
// }

// function KhachDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="HomeKhach"
//       drawerContent={() => <DrawerKhach />}>
//       <Drawer.Screen
//         name="HomeKhach"
//         component={HomeKhach}
//         options={{
//           drawerLabel: 'Trang chủ',
//         }}
//       />
//       <Drawer.Screen
//         name="LinhVuc"
//         component={DSLinhVuc}
//         options={{ drawerLabel: 'Lĩnh Vực' }}
//       />
//       <Drawer.Screen
//         name="TTHC"
//         component={DanhSachTT}
//         options={{ drawerLabel: 'Thủ tục H/C' }}
//       />
//       <Drawer.Screen
//         name="BaoCaoKhach"
//         component={BaoCaoKhach}
//         options={{ drawerLabel: 'Báo Cáo' }}
//       />
//       <Drawer.Screen
//         name="TracuuKhach"
//         component={TracuuKhach}
//         options={{ drawerLabel: 'Tra cứu hồ sơ' }}
//       />
//       <Drawer.Screen
//         name="HoiDapKhach"
//         component={DSHoiDapKhach}
//         options={{ drawerLabel: 'Hỏi đáp' }}
//       />
//       <Drawer.Screen
//         name="DangNhap"
//         component={DangNhap}
//         options={{ drawerLabel: 'Đăng nhập' }}
//       />
//       <Drawer.Screen
//         name="ThongTinChung"
//         component={DSThongTin}
//         options={{ drawerLabel: 'Thông tin chung' }}
//       />
//       <Drawer.Screen
//         name="HuongDan"
//         component={HuongDan}
//         options={{ drawerLabel: 'HuongDan' }}
//       />
//     </Drawer.Navigator>
//   );
// }
// function ThanhToan() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ThanhToanScreen"
//         component={ThanhToanScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongTinThanhToan"
//         component={ThongTinThanhToan}
//         options={{ headerShown: false }}
//       />
//        <Stack.Screen
//         name="ThongBaoThanhToan"
//         component={ThongBaoThanhToan}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }
// function DSThongTin() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ThongTinChung"
//         component={ThongTinChung}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietThongTin"
//         component={ChiTietThongTin}
//         options={{ headerShown: false, animationEnabled: false }}
//       />
//     </Stack.Navigator>
//   );
// }
// function DSLinhVuc() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="LinhVuc"
//         component={LinhVuc}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="itemThuTuc"
//         component={ListThuTuc}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietThuTuc"
//         component={ChiTietThuTuc}
//         options={{ headerShown: false, animationEnabled: false }}
//       />
//       <Stack.Screen
//         name="NopHoSo"
//         component={NopHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongTinNopHoSo"
//         component={thongTinHoSoChiTiet}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }
// function DanhSachTT() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DanhSachTTHC"
//         component={TTHC}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="itemThuTuc"
//         component={ListThuTuc}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietThuTuc"
//         component={ChiTietThuTuc}
//         options={{ headerShown: false, animationEnabled: false }}
//       />
//       <Stack.Screen
//         name="NopHoSo"
//         component={NopHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XemGiayTo"
//         component={XemGiayTo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongTinNopHoSo"
//         component={thongTinHoSoChiTiet}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="TimKiemThuTuc"
//         component={TimKiemThuTuc}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="KQTimKiemTT"
//         component={KqTimKiemTTHC}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function QuanLyHoso() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="QuanLy"
//         component={QuanLy}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChiTietHoSo"
//         component={ChiTietHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="HuyHoSo"
//         component={HuyHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongTinNopHoSo"
//         component={thongTinHoSoChiTiet}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ChinhSuaHoSo"
//         component={ChinhSuaHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="XemGiayToChinhSua"
//         component={XemGiayTo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="NopHoSoNhap"
//         component={NopLaiHoSo}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ThongBaoHoSo"
//         component={ThongBaoHoSo}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function DangNhap() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ForgotPass"
//         component={ForgotPass}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Dangky"
//         component={Dangky}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function DSHoiDapKhach() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HoiDapKhach"
//         component={HoiDapKhach}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Search"
//         component={TimKiemHoiDapKhach}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Content"
//         component={NoiDungHoiDapKhach}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ketQuaTimKiem"
//         component={resultSearchQuestion}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }
// const homeOptions = {
//   title: 'Home',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//   headerRight: () => <ThemeController />,
// };

// function App(props) {
//   const { theme } = props;
//   const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
//   const UserInfo = useSelector(state => state.loginReducer.userinfo);
//   const accessLogin = useSelector(state => state.loginReducer.accessLogin);
//   // get device token for push notification
//   async function getToken() {
//     const hasPermission = await messaging().hasPermission();
//     if (hasPermission) {
//       const token = await messaging().getToken();
//       console.log('tokennn:, ', token);
//     } else {
//       const requestPermission = await messaging().requestPermission();
//       if (requestPermission) {
//         const token = await messaging().getToken();
//         console.log('tokennn:, ', token);
//       }
//     }
//   }

//   useEffect(() => {
//     getToken();
//     // Listen to whether the token changes
//     return messaging().onTokenRefresh(token => {
//       //saveTokenToDatabase(token);
//     });
//   }, []);

//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     messaging().subscribeToTopic('dichvucong');
//   }, []);
//   const styleBar = 'light-content';
//   return (
//     <NavigationContainer ref={navigationRef} theme={theme}>
//       <StatusBar barStyle={styleBar} backgroundColor="#002581" />
//       {accessLogin ? (
//         <>
//           <DangNhap />
//         </>
//       ) : (
//         <>
//           {isLoggedIn ? (
//             <>
//               {UserInfo.userRole === 'CB' ? (
//                 <CanBoDrawer />
//               ) : UserInfo.userRole === 'DN' ? (
//                 <CongDanDrawer />
//               ) : (
//                 <CongDanDrawer />
//               )}
//             </>
//           ) : ( <>
//               <KhachDrawer />
//                </>
//           )}
//         </>
//       )}
//     </NavigationContainer>
//   );
// }

// export default App;

