// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , FlatList,SafeAreaView, } from 'react-native';
import { View, Button, Alert, StyleSheet ,Platform } from "react-native";

// import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./src/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// --------------- ------------------Bài 3.1 --------------------------------------//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.square}>
//         <Text style={styles.text}>Hello world</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,  
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   square: {
//     width: 200, 
//     height: 200,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2, 
//     borderColor: 'black',
//   },
//   text : {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


// --------------- ------------------Bài 3.2 --------------------------------------//

// const DATA = [
//   {
//     id: "1",
//     title: "Bước 1 Xác định nhu cầu khách hàng",
//     content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
//     time: "20/08/2020, 06:00",
//     icon: "checkmark-circle",
//   },
//   {
//     id: "2",
//     title: "Bạn có khách hàng mới!",
//     content: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
//     time: "20/08/2020, 06:00",
//     icon: "people",
//   },
//   {
//     id: "3",
//     title: "Khách hàng được chia sẻ bị trùng",
//     content: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
//     time: "20/08/2020, 06:00",
//     icon: "people",
//   },
//   {
//     id: "4",
//     title: "Công việc sắp đến hạn trong hôm nay",
//     content: "Bạn có 7 công việc sắp đến hạn trong hôm nay.",
//     time: "20/08/2020, 06:00",
//     icon: "checkmark-circle",
//   },
// ];

// const Item = ({ item }) => (
//   <View style={styles.item}>
//     <View style={styles.iconWrapper}>
//       <Ionicons name={item.icon} size={24} color="#fff" />
//     </View>

//     <View style={styles.textWrapper}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.content}>{item.content}</Text>
//       <Text style={styles.time}>{item.time}</Text>
//     </View>
//   </View>
// );

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Thông báo</Text>

//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <Item item={item} />}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//   },
//   item: {
//     flexDirection: "row",
//     padding: 16,
//   },
//   iconWrapper: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#3F51B5",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   textWrapper: {
//     flex: 1,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 15,
//     marginBottom: 4,
//   },
//   content: {
//     color: "#555",
//     marginBottom: 6,
//   },
//   time: {
//     fontSize: 12,
//     color: "#999",
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#eee",
//     marginLeft: 68,
//   },
// });


// --------------- ------------------Bài 4.1 --------------------------------------//
// export default function App() {

//   return (
//     <View style={styles.container}>
//       <Button
//           title="Press me"
//           onPress={() => {
//             if (Platform.OS === "web") {
//               alert("hello");
//             } else {
//               Alert.alert("hello");
//             }
//           }}
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// --------------- ------------------Bài 4.2 --------------------------------------//
// const Square = ({ color }) => {
//   return <View style={[styles.square, { backgroundColor: color }]} />;
// };

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Square color="red" />
//       <Square color="green" />
//       <Square color="blue" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row", // sắp xếp theo hàng ngang
//     justifyContent: "center", // căn giữa dọc
//     alignItems: "center",     // căn giữa ngang
//   },
//   square: {
//     width: 100,
//     height: 100,
//     margin: 10,
//   },
// });