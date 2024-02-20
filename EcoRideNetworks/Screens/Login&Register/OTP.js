// import React, { useRef } from "react";
// import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { myColors } from "../Common/utils/myColors";
// import OTPTextInput from "react-native-otp-textinput";


// const OTP = (props) => {
//   let otpInput = useRef(null);
//   return (
//     <SafeAreaView style={styles.root}>
//       <View style={{ marginTop: 100, marginLeft: 50, gap: 10 }}>
//         <Text style={{ fontSize: 24, fontWeight: 800 }}>
//           OTP Verification
//         </Text>
//         <Text style={{ fontSize: 14, fontWeight: 300 }}>
//           Code has been send to +91 8765432098
//         </Text>
//       </View>

//       <View style={styles.mainStyle}>
//         <View style={styles.contentStyle}>

//           <OTPTextInput
//             ref={(e) => (this.otpInput = e)}
//             textInputStyle={styles.textInputStyle}
//             tintColor={myColors.primary}
//           />
//           <View style={{alignItems:'center', gap:10}}>
//             <Text>
//               Resend Code in
//               <Text style={styles.secondTextStyle}> 30s </Text>s
//             </Text>
//             <Text>
//               Didn’t you receive the OTP?
//               <Text style={styles.secondTextStyle}> Resend OTP </Text>s
//             </Text>          
//           </View>

//         </View>
//         <Pressable
//           onPress={() => { props.navigation.navigate('Success') }}
//           style={styles.buttonStyle}
//         >
//           <Text style={styles.buttonTextStyle}>Verify</Text>
//         </Pressable>

//       </View>

//     </SafeAreaView>
//   )
// }


// export default OTP;


// const styles = StyleSheet.create({
//   root: {
//     display: "flex",
//     height: "100%",
//     backgroundColor: myColors.third
//   },
//   mainStyle: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: -30
//   },
//   contentStyle: {
//     marginVertical: 100,
//     alignItems: "center",
//     gap:10
//   },
//   secondTextStyle: {
//     color: myColors.primary,
//   },
//   buttonStyle: {
//     height: 53,
//     width: "90%",
//     backgroundColor: myColors.primary,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 25,
//     marginTop: -20,
//   },
//   buttonTextStyle: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "400",
//   },
//   textInputStyle: {
//     borderRadius: 10,
//     borderWidth: 2,
//     color: myColors.primary,
//   },
// });


import React, { useState, useRef } from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { myColors } from '../Common/utils/myColors';

const OTP = (props) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP === '123456') {
      // Navigate to success screen if OTP is correct
      props.navigation.navigate('Success');
    } else {
      // Handle incorrect OTP
      alert('Incorrect OTP. Please try again.');
      // Clear OTP inputs
      setOtp(['', '', '', '', '', '']);
      // Focus on the first OTP input
      inputRefs.current[0].focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Code has been sent to +91 8765432098</Text>
      </View>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={text => handleChange(text, index)}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <View style={styles.footer}>
      <Pressable
        onPress={handleVerify} // Corrected onPress handler
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>Verify</Text>
      </Pressable>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.third,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: myColors.primary,
    textAlign: 'center',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
    buttonStyle: {
    height: 53,
    width: "90%",
    backgroundColor: myColors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: -20,
  },
});

export default OTP;

