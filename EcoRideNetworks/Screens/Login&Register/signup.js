import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignupForm from "./signupForm";

const {width,heighth} = Dimensions.get('screen');
const Signup = (props) =>{
    return(
        <SafeAreaView style={{ alignItems: 'center' }}>
            <View>
                <View>
                    <Image 
                        source={require("../../images/assets/Signin.png")} 
                        style={{height:250, width:width, paddingHorizontal: 0,}}/>              
                    <Text style={{ fontSize: 24, alignSelf: 'center', fontWeight: '800' }}>Sign Up</Text>

                </View>
            </View>
          
            <SignupForm props={props}/>
          
        </SafeAreaView>
    )
}

export default Signup;


const styles = StyleSheet.create({

    note: {
        fontSize: 16,
        paddingHorizontal: 50,
        textAlign: 'center',
        marginTop: 10
    }

})