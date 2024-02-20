import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Dimensions } from "react-native";
import {axios} from "react-native-axios"

const { width, height } = Dimensions.get('screen');
const formWidth = width - 50;

const EmailForm = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Make a POST request to your backend login endpoint
            const response = await axios.post('YOUR_BACKEND_LOGIN_ENDPOINT', {
                email: email,
                // Add other necessary fields like password here
            });
            // Handle successful login, navigate to the OTP screen
            props.props.navigation.navigate("OTP");
        } catch (error) {
            // Handle login error
            setError('Invalid email');
        }
    };

    return (
        <View style={styles.form}>
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
        </View>
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