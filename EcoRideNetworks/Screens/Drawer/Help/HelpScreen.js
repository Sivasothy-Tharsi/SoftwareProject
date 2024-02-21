
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const HelpScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handlePress = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>EcoRideNetworks Help</Text>
      <Divider style={{ marginBottom: 30, marginTop: 5, height: 10, borderColor: "rgba(0, 0, 0, 0.2)" }} />
      <View style={styles.helpContainer}>
        <List.Accordion
          title="Starting a ride"
          expanded={expandedSection === 1}
          onPress={() => handlePress(1)}
          right={() => (
            <Icon name={expandedSection === 1 ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="black" />
          )}
        >
          <View style={styles.expandedContainer}>
            <Text style={styles.expandedTextStyle}>Getting started with EcoRide Networks is a breeze! Just open up the EcoRide app on your phone, and take a look at the map. It'll show you where the bikes are around you. Check out the options, pick a bike that suits you and looks good to go. Once you've found your perfect ride, choose a plan, pay up, and unlock the bike using the QR code. That's it! Now you're all set to kick off your EcoRide and have a great ride to wherever you're headed. Easy, right?</Text>
          </View>
        </List.Accordion>
      </View>

      <View style={styles.helpContainer}>
        <List.Accordion
          title="Parking and ending ride"
          expanded={expandedSection === 2}
          onPress={() => handlePress(2)}
          right={() => (
            <Icon name={expandedSection === 2 ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="black" />
          )}
        >
          <View style={styles.expandedContainer}>
            <Text>Wrapping up your EcoRide is as simple as finding a nearby station with an available dock. Once you're there, gently return the bike to any open dock. Wait for the light on the dock to turn solid green – that means your ride is successfully ended. Make sure the bike is securely docked to avoid any additional charges. If, by any chance, you can't find an open dock, no worries! Just use the EcoRide app to locate the nearest station with available docks or reach out to our customer service for assistance. Happy riding!</Text>
          </View>
        </List.Accordion>
      </View>

      <View style={styles.helpContainer}>
        <List.Accordion
          title="Report an issuse"
          expanded={expandedSection === 3}
          onPress={() => handlePress(3)}
          right={() => (
            <Icon name={expandedSection === 3 ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="black" />
          )}
        >
          <View style={styles.expandedContainer}>
            <Text>If you encounter any issues during your EcoRide, we're here to help! To report any concerns or problems, open the EcoRide Networks app and navigate to the "Report an Issue" section. Describe the issue you're facing in detail, providing information such as the bike ID, station location, and a brief explanation of the problem. Your feedback is valuable in ensuring a smooth riding experience for everyone. Our support team will promptly address your concerns and work towards a resolution. Thank you for helping us improve EcoRide Networks!</Text>
          </View>
        </List.Accordion>
      </View>

      <View style={styles.helpContainer}>
        <List.Accordion
          title="Account management"
          expanded={expandedSection === 4}
          onPress={() => handlePress(4)}
          right={() => (
            <Icon name={expandedSection === 4 ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="black" />
          )}
        >
          <View style={styles.expandedContainer}>
            <Text style={styles.expandedTextStyle}>Certainly! Here's a revised version without mentioning the membership plan: "Effortlessly manage your EcoRide Networks account through the 'Profile' or 'Account Settings' section in the app. Easily update personal information, modify billing details, and enjoy a seamless, personalized experience. For additional assistance, use the 'Contact Us' feature for prompt support. Happy riding with EcoRide Networks!"</Text>
          </View>
        </List.Accordion>
      </View>

      <View style={styles.helpContainer}>
        <List.Accordion
          title="Delete my account"
          expanded={expandedSection === 5}
          onPress={() => handlePress(5)}
          right={() => (
            <Icon name={expandedSection === 5 ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="black" />
          )}
        >
          <View style={styles.expandedContainer}>
            <Text>To delete your EcoRide Networks account, go to 'Account Settings' or 'Profile' in the app, find 'Delete My Account,' and follow the prompts. For assistance, contact customer service through the 'Contact Us' feature. Thank you for your time with EcoRide Networks!</Text>
          </View>
        </List.Accordion>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000"
  },
  helpContainer: {
    borderRadius: 10,
    backgroundColor: "#e1e1e1",
    marginBottom: 10,
    overflow: "hidden",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
  },
  expandedTextStyle: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    textAlign: "justify",
  },
  expandedContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },

});

export default HelpScreen;





// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const HelpScreen = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handlePress = () => setExpanded(!expanded);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Help Screen</Text>
//       <Text>Placeholder for help content</Text>
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
// });

// export default HelpScreen;