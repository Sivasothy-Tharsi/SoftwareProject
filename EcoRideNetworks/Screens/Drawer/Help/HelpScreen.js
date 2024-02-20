import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Screen</Text>
      <Text>Placeholder for help content</Text>
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
});

export default HelpScreen;
