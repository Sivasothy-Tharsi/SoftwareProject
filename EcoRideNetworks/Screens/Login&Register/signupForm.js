// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
// import client from "../../api/client";

// const { width, height } = Dimensions.get('screen');
// const formWidth = width - 50;

// const SignupForm = (props) => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState('');

//     const handleSignup = async () => {
//         try {
//             // Make a POST request to your backend signup endpoint
//             const response = await client.post('/', {
//                 firstName: firstName,
//                 lastName: lastName,
//                 mobileNumber: mobileNumber,
//                 email: email,
//             });
//             console.log(response)
//             // Handle successful signup, navigate to OTP screen or appropriate screen
//             props.props.navigation.navigate("OTP");
//         } catch (error) {
//             // Handle signup error
//             setError('Failed to create account. Please try again.');
//         }
//     };

//     return (
//         <View style={styles.form}>
//             <TextInput
//                 placeholder="First Name"
//                 value={firstName}
//                 onChangeText={(text) => setFirstName(text)}
//                 style={styles.textInput}
//             />
//             <TextInput
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChangeText={(text) => setLastName(text)}
//                 style={styles.textInput}
//             />
//             <TextInput
//                 placeholder="Mobile Number"
//                 value={mobile}
//                 onChangeText={(text) => setMobile(text)}
//                 style={styles.textInput}
//             />
//             <TextInput
//                 placeholder="Email Address"
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//                 style={styles.textInput}
//             />
//             {error ? <Text style={styles.errorText}>{error}</Text> : null}
//             <TouchableOpacity style={styles.btn} onPress={handleSignup}>
//                 <Text style={styles.btnText}>CREATE ACCOUNT</Text>
//             </TouchableOpacity>
//             <View style={{ marginTop: 10, flexDirection: 'row' }}>
//                 <Text>Already have an account? </Text>
//                 <Text onPress={() => props.props.navigation.navigate("Login")} style={{ color: '#009EFD' }}>Sign in</Text>
//             </View>
//         </View>
//     );
// };

// export default SignupForm;

// const styles = StyleSheet.create({
//     form: {
//         height: 300,
//         width: formWidth,
//         marginTop: 10,
//         borderRadius: 10,
//         alignItems: 'center'
//     },
//     textInput: {
//         width: formWidth - 10,
//         height: 50,
//         backgroundColor: 'lightgrey',
//         borderRadius: 20,
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     btn: {
//         backgroundColor: "#009EFD",
//         width: formWidth - 10,
//         alignItems: 'center',
//         height: 50,
//         justifyContent: 'center',
//         borderRadius: 30
//     },
//     btnText: {
//         fontSize: 16,
//         fontWeight: '800',
//         color: '#fff'
//     },
//     errorText: {
//         fontSize: 14,
//         color: 'red',
//         marginBottom: 10
//     }
// });

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import client from "../../api/client";
import axios from "axios";

const { width, height } = Dimensions.get('screen');
const formWidth = width - 50;

const SignupForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function handleSignup() {
        console.log("firstName:", firstName);
        console.log("lastName", lastName)
        console.log("Email:", email);
        console.log("MobileNumber:", mobile);
      
        if (!firstName || !lastName || !email || !mobile) {
          setRegistrationStatus("Please fill in all the required fields.");
          return;
        }
    
      
      
        try {
          const response = await axios.post("http://192.168.8.155:5000/api/v1/users/", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobile
          });
      
          console.log(response);
          props.props.navigation.navigate("OTP")
        } catch (error) {
          console.log(error);
          if (error.response && error.response.data && error.response.data.message) {
            setRegistrationStatus(error.response.data.message);
          } else {
            // Handle other types of errors
            setRegistrationStatus("Registration failed. Please check your information.");
          }
        }
      }
    
    
    return (
        <View style={styles.form}>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Mobile Number"
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                style={styles.textInput}
            />
            <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={styles.btn} onPress={handleSignup}>
                <Text style={styles.btnText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <Text>Already have an account? </Text>
                <Text onPress={() => props.props.navigation.navigate("Login")} style={{ color: '#009EFD' }}>Sign in</Text>
            </View>
        </View>
    );
};

export default SignupForm;

const styles = StyleSheet.create({
    form: {
        height: 300,
        width: formWidth,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    textInput: {
        width: formWidth - 10,
        height: 50,
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: "#009EFD",
        width: formWidth - 10,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        borderRadius: 30
    },
    btnText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff'
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        marginBottom: 10
    }
});




















// import { useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Dimensions } from "react-native"

// const {width,height} = Dimensions.get('screen');
// const formWidth = width-50;
// const SignupForm = (props) => {
//     const [email,setEmail] = useState('');
//     const [mobile,setMobile] = useState('');
//     const [firstName,setFirstname] = useState('');
//     const [lastName,setLastName] = useState('');
//     return (
//         <View style={styles.form}>
            
//             <TextInput
//             placeholder="First Name"
//             value={firstName}
//             onChangeText={(text) => setFirstname(text)}
//             style={styles.textInput}
//             />
//             <TextInput
//             placeholder="Last Name"
//             value={lastName}
//             onChangeText={(text) => setLastName(text)}
//             style={styles.textInput}
//             />
//             <TextInput
//             placeholder="Mobile Number"
//             value={mobile}
//             onChangeText={(text) => setMobile(text)}
//             style={styles.textInput}
//             />
//             <TextInput
//             placeholder="Email Address"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             style={styles.textInput}
//             />
//             <View style={{marginTop:30}}>
//                 <TouchableOpacity style={styles.btn}
//                     onPress={()=>props.props.navigation.navigate("OTP")}>
//                     <Text style={styles.btnText}>CREATE ACCOUNT</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{marginTop:10, flexDirection:'row'}}>
//                 <Text>Already have an account? </Text>
//                 <Text onPress={()=>props.props.navigation.navigate("Login")} 
//                     style={{color:'#009EFD'}}>  Sign in</Text> 
//             </View>

//         </View>
//     )
// }

// export default SignupForm;


// const styles = StyleSheet.create({

//     form: {
//         height: 300,
//         width: formWidth,
//         marginTop: 10,
//         borderRadius: 10,
//         alignItems:'center'
//     },
//     textInput: {
//         width: formWidth-10,
//         height:50,
//         backgroundColor:'lightgrey',
//         borderRadius:20,
//         marginTop:10,
//         marginBottom:10,
//     },
//     btn: {
//         backgroundColor:"#009EFD",
//         width:formWidth-10,
//         alignItems:'center',
//         height:50,
//         justifyContent:'center',
//         borderRadius:30
//     },
//     btnText: {
//         fontSize:16,
//         fontWeight:'800',
//         color:'#fff'
        
//     }
// })