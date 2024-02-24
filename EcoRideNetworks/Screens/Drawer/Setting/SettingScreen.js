import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [allowNotifications, setAllowNotifications] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setAllowNotifications((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const handleDeleteAccount = () => {
    // Implement delete account functionality here
    alert("Account deleted!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings Screen</Text>

      <View style={styles.option}>
        <Text>Allow Notifications</Text>
        <Switch value={allowNotifications} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.option}>
        <Text>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  deleteButton: {
    marginTop: 40,
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SettingsScreen;
