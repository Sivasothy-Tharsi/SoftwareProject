import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { myColors } from "./utils/myColors";




const Success = () => {
    return(
        <SafeAreaView style={{alignItems:'center', flex:1}}>
            <Image source={require('../../images/assets/Success.png')}
            style={styles.ImgSuccess}
            />
            <Text style={styles.MainTxt}>Success!</Text>
            <Text 
            style={styles.SubTxt}>
                Congratulations! You have been successfully authenticated
            </Text>
            <TouchableOpacity 
                style={styles.SuccessBtn}>
                <Text style={styles.SuccessBtnText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Success;



const styles = StyleSheet.create({
    SuccessBtn: {
        marginTop:50, 
        height:50, 
        width:300, 
        backgroundColor:myColors.primary , 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25
    },
    SuccessBtnText: {
        color:'#fff', 
        fontSize:18, 
        fontWeight:'800'
    },
    ImgSuccess: {
        marginBottom:20, 
        marginTop:150, 
        width:100, 
        height:100
    },
    MainTxt: {
        fontSize:24, 
        fontWeight:'800'
    },
    SubTxt: {
        marginTop:20, 
        paddingHorizontal:50,
        textAlign:'center', 
        fontSize:16
    }
})