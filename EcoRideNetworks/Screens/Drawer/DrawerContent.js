import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-paper";
import UserProfile from "../userProfile";

const DrawerItem = ({ icon, text, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
        <Image source={icon} style={styles.drawerIcon} />
        <Text style={styles.drawerItemText}>{text}</Text>
      </TouchableOpacity>
      <Divider style={styles.divider} />
    </>
  );
};

const CustomDrawerContent = ({ navigation, userdata }) => {
  const handleLogout = () => {
    // Implement logout logic here
  };

  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    profileImage: "https://captionslover.com/wp-content/uploads/2023/06/Profile-Pic-For-Instagram-For-Boys.jpg",
  };

  // Define drawer items with icons
  const drawerItems = [
    { icon: require("../../images/icons/home_icon.png"), text: "Home", onPress: () => navigation.navigate("Home") },
    { icon: require("../../images/icons/wallet_icon.png"), text: "My Wallet", onPress: () => navigation.navigate("Wallet") },
    { icon: require("../../images/icons/profile_icon.png"), text: "Profile", onPress: () => navigation.navigate("Profile") },
    { icon: require("../../images/icons/setting_icon.png"), text: "Settings", onPress: () => navigation.navigate("Settings") },
    { icon: require("../../images/icons/help_icon.png"), text: "Help", onPress: () => navigation.navigate("Help") },
    { icon: require("../../images/icons/contact_icon.png"), text: "Contact", onPress: () => navigation.navigate("Contact") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/topCurve1.png')} style={styles.curveBackground} />
      </View>
      <UserProfile user={user} />
      {drawerItems.map((item, index) => (
        <DrawerItem key={index} icon={item.icon} text={item.text} onPress={item.onPress} />
      ))}
      <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
        <Image source={require('../../images/icons/logout_icon.png')} style={styles.drawerIcon} />
        <Text style={styles.drawerItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    borderRadius: 50,
  },
  imageContainer: {
    position: "relative",
    height: 210, 
    width: "100%",
    overflow: "hidden",
    marginTop:-10
  },
  curveBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft:20
  },
  drawerIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default CustomDrawerContent;






// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { Divider } from "react-native-paper";
// import UserProfile from "../userProfile";

// const DrawerItem = ({ icon, text, onPress }) => {
//   return (
//     <>
//       <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
//         <Image source={icon} style={styles.drawerIcon} />
//         <Text style={styles.drawerItemText}>{text}</Text>
//       </TouchableOpacity>
//       <Divider style={styles.divider} />
//     </>
//   );
// };

// const CustomDrawerContent = ({ navigation }) => {
//   const handleLogout = () => {
//     // Implement logout logic here
//   };

//   // Sample user data
//   const user = {
//     name: "John Doe",
//     email: "john.doe@gmail.com",
//     profileImage: "https://captionslover.com/wp-content/uploads/2023/06/Profile-Pic-For-Instagram-For-Boys.jpg",
//   };

//   // Define drawer items with icons
//   const drawerItems = [
//     { icon: require("../../images/icons/home_icon.png"), text: "Home", onPress: () => navigation.navigate("Home") },
//     { icon: require("../../images/icons/wallet_icon.png"), text: "My Wallet", onPress: () => navigation.navigate("Wallet") },
//     { icon: require("../../images/icons/profile_icon.png"), text: "Profile", onPress: () => navigation.navigate("Profile") },
//     { icon: require("../../images/icons/setting_icon.png"), text: "Settings", onPress: () => navigation.navigate("Settings") },
//     { icon: require("../../images/icons/help_icon.png"), text: "Help", onPress: () => navigation.navigate("Help") },
//     { icon: require("../../images/icons/contact_icon.png"), text: "Contact", onPress: () => navigation.navigate("Contact") },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//       </View>
//       <UserProfile user={user} />
//       {drawerItems.map((item, index) => (
//         <DrawerItem key={index} icon={item.icon} text={item.text} onPress={item.onPress} />
//       ))}
//       {/* Logout */}
//       <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
//         <Image source={require('../../images/icons/logout_icon.png')} style={styles.drawerIcon} />
//         <Text style={styles.drawerItemText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,

//   },
//   imageContainer: {
//     height:100,
//     width:"100%",
//     backgroundColor:"#000",
//     marginBottom:30

//   },
//   topCurveImage: {
//     // width: "100%",
//     // height: 100,
//     // marginBottom: 20,
//     resizeMode: "cover",
//   },
//   drawerItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   drawerIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   drawerItemText: {
//     fontSize: 16,
//   },
//   divider: {
//     height: 1,
//     borderColor: "rgba(0, 0, 0, 0.2)",
//     marginBottom: 20,
//   },
// });

// export default CustomDrawerContent;



















