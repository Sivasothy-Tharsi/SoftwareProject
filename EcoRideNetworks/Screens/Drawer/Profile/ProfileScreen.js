import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <View style={styles.profileInfo}>
        <Text>Name: John Doe</Text>
        <Text>Email: john.doe@example.com</Text>
      </View>
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
  profileInfo: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
  },
});

export default ProfileScreen;
