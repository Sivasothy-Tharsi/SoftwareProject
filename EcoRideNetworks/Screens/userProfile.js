import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";

const UserProfile = ({ user }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <TouchableOpacity onPress={toggleModal} style={styles.editIconContainer}>
          <Image source={require('../images/icons/edit_icon.png')} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.profileText}>{user.name}</Text>
        <Text style={styles.profileText}>{user.email}</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile Image Options</Text>
            <View style={styles.buttonGroup}>
              <Button title="Remove" onPress={toggleModal} color="#FF6347" />
              <Button title="Add" onPress={toggleModal} color="#4682B4" />
              <Button title="Update" onPress={toggleModal} color="#32CD32" />
              <Button title="Close" onPress={toggleModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "column", 
    alignItems: "flex-start", // Align items to the left
    marginBottom: 20,
    marginLeft: 20,
    marginTop: -100,
    marginRight: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 10, // Add margin between image and text
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  editIconContainer: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "#16A4F4",
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  userInfo: {
    alignItems: "flex-start", // Align items to the left
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default UserProfile;



// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";

// const UserProfile = ({ user }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };

//   return (
//     <View style={styles.profileContainer}>

//       <View style={styles.imageContainer}>
//         <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
//         <TouchableOpacity onPress={toggleModal} style={styles.editIconContainer}>
//           <Image source={require('../images/icons/edit_icon.png')} style={styles.editIcon} />
//         </TouchableOpacity>
//       </View>


//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={toggleModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Profile Image Options</Text>
//             <View style={styles.buttonGroup}>
//               <Button title="Remove" onPress={toggleModal} color="#FF6347" />
//               <Button title="Add" onPress={toggleModal} color="#4682B4" />
//               <Button title="Update" onPress={toggleModal} color="#32CD32" />
//               <Button title="Close" onPress={toggleModal} />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <View style={styles.userInfo}>
//         <Text style={styles.profileText}>{user.name}</Text>
//         <Text style={styles.profileText}>{user.email}</Text>
//         {/* Add more user details here */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     marginLeft: 20,
//     marginTop: -80,
//     borderBottomWidth: 1,
//     paddingBottom: 10,
//     borderBottomColor: "#ccc",
//   },
//   imageContainer: {
//     position: "relative",
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 10,
//   },
//   editIconContainer: {
//     position: "absolute",
//     top: 50,
//     right: 10,
//     backgroundColor: "#16A4F4",
//     borderRadius: 20,
//     width: 25,
//     height: 25,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   editIcon: {
//     width: 20,
//     height: 20,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 10,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   profileText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
// });

// export default UserProfile;

