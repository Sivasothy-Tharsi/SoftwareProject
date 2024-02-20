import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Dimensions, TouchableOpacity, Text } from "react-native";
import slides from "./list/slides";


const {width,height} = Dimensions.get('window')
const BottomButton = (props) => {
    const [disable,setDisable] = useState(false)
    const [nextButtonTitle,setNextButtonTitle] = useState("")

 
    useEffect(()=>{
        props.currentIndex==0?setDisable(true):setDisable(false)
        props.currentIndex==slides.length-1?setNextButtonTitle(`Let's go`):setNextButtonTitle('Next')
    })
    return (
        <View style={styles.buttonPosition}>
            <TouchableOpacity 
                style={[styles.previousBtn, disable?styles.disabledColor:null]} 
                onPress={props.scrollToPrevious} disabled={disable}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.nextBtn} 
                onPress={nextButtonTitle=='Next'? props.scrollToNext:()=> props.props.navigation.navigate("Login")}>
                <Text style={{fontSize:16,fontWeight:800,color:'#fff'}}>{`${nextButtonTitle}`}</Text>
            </TouchableOpacity>
        </View>

    )
}


export default BottomButton;


const styles = StyleSheet.create({
    buttonPosition: {
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft:width*0.1,
        marginRight:width*0.1,
      },
    
    previousBtn: {
        width:145,
        height:40,
        borderColor:'#009EFD', 
        borderWidth:1, 
        backgroundColor:'#E2F0F9', 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginLeft:width*0.01,
        marginRight:width*0.01,
    },
    nextBtn: {
        width:145,
        height:40,
        borderColor:'#009EFD', 
        borderWidth:1, 
        backgroundColor:'#009EFD', 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginLeft:width*0.01,
        marginRight:width*0.01,
    },
    disabledColor: {
        backgroundColor: 'lightgrey',
        borderColor:'lightgrey'
      },
})