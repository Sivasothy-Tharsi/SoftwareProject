import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get('screen');
const HeaderStyle = ({height,width}) => {
    return (
        <Image style={{alignItems:'center',width:width,height:450}} source={require('../../../images/assets/Curve.png')}/>
    )
}


export default HeaderStyle;


const styles = StyleSheet.create({
    rectangle: {
        width: '100%',
        height: height *0.2, 
        backgroundColor: '#16A4F4',
      },
      endCircle: {
        width: width * 0.83, 
        height: width * 0.83,
        backgroundColor: '#16A4F4',
        alignSelf: 'flex-end',
        borderBottomLeftRadius: width * 0.83,
        marginRight:-width * 0.277,
      },
      startCircle: {
        width: width * 0.83 * 1.66, 
        height: width * 0.83 * 1.66, 
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        marginTop: -(height * 0.125 * 0.75), 
        marginLeft: -(width * 0.83 * 1.5 * 0.57), 
        borderTopRightRadius: width * 0.33 * 1.5  , 
        borderBottomRightRadius: width * 0.33 * 1.5, 
      },
})