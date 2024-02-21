import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from "react-native-vector-icons/FontAwesome";
import SVGComponent from "../../images/svg/SVG";

const CustomDrawerContent = ({ navigation }) => {

    

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogout = () => {
        // Implement logout logic here
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Wallet")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>My Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Help")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Contact</Text>
            </TouchableOpacity>
            <View style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Dark Mode</Text>
                <View style={styles.darkModeContainer}>
                    <Switch
                        value={isDarkMode}
                        onValueChange={toggleDarkMode}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>Logout</Text>
            </TouchableOpacity>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    svgContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    drawerItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    drawerItemText: {
      fontSize: 16,
     // marginLeft: 10,
      
    },
    darkModeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
  

export default CustomDrawerContent;

