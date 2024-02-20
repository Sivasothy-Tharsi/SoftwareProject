import { createDrawerNavigator } from "@react-navigation/drawer";
import MapScreen from "../home";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MapScreen} />
      {/* Add more screens to the drawer navigator as needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;