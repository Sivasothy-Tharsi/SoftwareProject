import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import {axios} from "react-native-axios"

const { width, height } = Dimensions.get('screen');
const formWidth = width - 50;

const SignupForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            // Make a POST request to your backend signup endpoint
            const response = await axios.post('YOUR_BACKEND_SIGNUP_ENDPOINT', {
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
                email: email,
            });
            // Handle successful signup, navigate to OTP screen or appropriate screen
            props.props.navigation.navigate("OTP");
        } catch (error) {
            // Handle signup error
            setError('Failed to create account. Please try again.');
        }
    };

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