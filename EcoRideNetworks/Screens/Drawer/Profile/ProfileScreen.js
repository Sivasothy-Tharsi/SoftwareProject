import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Modal, FlatList } from "react-native";

const ProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    membershipType: "Premium",
    membershipExpiration: "01/01/2025",
    totalRides: 25,
    points: 150,
  });

  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [rideHistory, setRideHistory] = useState([
    { id: 1, date: "2024-02-20", distance: "3.5 miles", duration: "15 minutes" },
    { id: 2, date: "2024-02-18", distance: "2.8 miles", duration: "12 minutes" },
    { id: 3, date: "2024-02-15", distance: "4.2 miles", duration: "20 minutes" },
  ]);
  const [showHistory, setShowHistory] = useState(false);

  const handleEdit = () => {
    setEditing(true);
    setEditedData(userData);
  };

  const handleSave = () => {
    setEditing(false);
    setUserData(editedData);
  };

  const handleChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const toggleHistoryModal = () => {
    setShowHistory(!showHistory);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Name:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={editedData.name}
                onChangeText={(text) => handleChange("name", text)}
              />
            ) : (
              <Text style={styles.info}>{userData.name}</Text>
            )}
            <Text style={styles.label}>Email:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={editedData.email}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.info}>{userData.email}</Text>
            )}
            <Text style={styles.label}>Mobile:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={editedData.mobile}
                onChangeText={(text) => handleChange("mobile", text)}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.info}>{userData.mobile}</Text>
            )}
            <Text style={styles.label}>Membership Type:</Text>
            <Text style={styles.info}>{userData.membershipType}</Text>
            <Text style={styles.label}>Membership Expiration:</Text>
            <Text style={styles.info}>{userData.membershipExpiration}</Text>
            <Text style={styles.label}>Total Rides:</Text>
            <Text style={styles.info}>{userData.totalRides}</Text>
            <Text style={styles.label}>Points:</Text>
            <Text style={styles.info}>{userData.points}</Text>
          </View>
          {editing ? (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.historyButton} onPress={toggleHistoryModal}>
            <Text style={styles.buttonText}>Show Ride History</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Modal visible={showHistory} animationType="slide">
        <View style={styles.historyContainer}>
          <Text style={styles.historyHeader}>Ride History</Text>
          <FlatList
            data={rideHistory}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text>Date: {item.date}</Text>
                <Text>Distance: {item.distance}</Text>
                <Text>Duration: {item.duration}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={toggleHistoryModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  profileContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  saveButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  historyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  historyHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  historyItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default ProfileScreen;








// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Profile Screen</Text>
//       <View style={styles.profileInfo}>
//         <Text>Name: John Doe</Text>
//         <Text>Email: john.doe@example.com</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   profileInfo: {
//     backgroundColor: "#f0f0f0",
//     padding: 20,
//     borderRadius: 10,
//   },
// });

// export default ProfileScreen;
