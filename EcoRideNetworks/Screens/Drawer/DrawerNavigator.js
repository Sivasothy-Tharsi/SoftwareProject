// import { createDrawerNavigator } from "@react-navigation/drawer";
// import MapScreen from "../home";
// import ProfileScreen from "./Profile/ProfileScreen";
// import SettingsScreen from "./Setting/SettingScreen";
// import HelpScreen from "./Help/HelpScreen";
// import CustomDrawerContent from "./DrawerContent";
// import WalletScreen from "./Payment/MyWallet";
// import ContactScreen from "./Contact/Contact";

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = ({route}) => {
//   const { userData } = route.params;
//   return (
//     <Drawer.Navigator drawerContent={CustomDrawerContent}>
//       <Drawer.Screen name="Home" component={MapScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Help" component={HelpScreen} />
//       <Drawer.Screen name="Wallet" component={WalletScreen} />
//       <Drawer.Screen name="Contact" component={ContactScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

import { createDrawerNavigator } from "@react-navigation/drawer";
import MapScreen from "../home";
import ProfileScreen from "./Profile/ProfileScreen";
import SettingsScreen from "./Setting/SettingScreen";
import HelpScreen from "./Help/HelpScreen";
import CustomDrawerContent from "./DrawerContent";
import WalletScreen from "./Payment/MyWallet";
import ContactScreen from "./Contact/Contact";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({route}) => {
  const userData  = route.params;
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} userData={userData} />}>
      <Drawer.Screen name="Home" component={MapScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Wallet" component={WalletScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;