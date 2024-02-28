import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
// import {axios} from "react-native-axios"
import axios from 'axios';

const { width, height } = Dimensions.get('screen');
const formWidth = width - 50;

const EmailForm = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('http://192.168.8.155:5000/api/v1/users/login', {
    //             email: email,
    //         });
    //         props.props.navigation.navigate("OTP", { userData: response.data });
    //     } catch (error) {
    //         console.error("Login Error:", error); // Log the error for debugging
    //         if (error.response && error.response.data && error.response.data.message) {
    //             setError(error.response.data.message);
    //         } else {
    //             setError('An error occurred during login');
    //         }
    //     }
    // };

    const handleLogin = async () => {
        console.log("Email:", email);
     
    
        try {
          const response = await axios.post("http://192.168.8.155:5000/api/v1/users/login", {
            email: email,
        });
        console.log(response);
        if (response && response.data) {
          console.log(response.data);
          props.props.navigation.navigate("OTP")
        } else {
          // Handle the case where the response doesn't contain the expected data
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
          setLoginError(error.response.data.message);
        } else {
          // Handle other types of errors
          setLoginError("An error occurred during login.");
        }
      }
      
      };
    

    return (
        <KeyboardAvoidingView style={styles.form}>
            <Text>LogIn with Email</Text>
            <TextInput
                placeholder="      Email Address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
            />
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnText}>SIGNIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <Text>Don’t have an account? </Text>
                <Text onPress={() => props.props.navigation.navigate("SignUp")} style={{ color: '#009EFD' }}>  Sign Up</Text>
            </View>
            {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
        </KeyboardAvoidingView>
    );
};

export default EmailForm;

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
    }
});















// import { useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Dimensions } from "react-native"

// const {width,height} = Dimensions.get('screen');
// const formWidth = width-50;
// const EmailForm = (props) => {
//     const [email,setEmail] = useState('');
//     return (
//         <View style={styles.form}>
//             <Text>LogIn with Email</Text>
//             <TextInput
//             placeholder="      Email Address"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             style={styles.textInput}
//             />
//             <View style={{marginTop:30}}>
//                 <TouchableOpacity style={styles.btn} onPress={()=>props.props.navigation.navigate("OTP")}>
//                     <Text style={styles.btnText}>SIGNIN</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{marginTop:10, flexDirection:'row'}}>
//                 <Text>Don’t have an account? </Text>
//                 <Text onPress={()=>props.props.navigation.navigate("SignUp")} style={{color:'#009EFD'}}>  Sign  Up</Text> 
//             </View>

//         </View>
//     )
// }

// export default EmailForm;


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


