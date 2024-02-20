import React from "react";
import { StyleSheet, Text, View, Animated, useWindowDimensions } from "react-native";




const Paginator = ({data, scrollX}) => {
    const {width} = useWindowDimensions();
    return(
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i-1) * width, i * width, (i+1) * width];
                

                const squreWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate: 'clamp'
                })

                return <Animated.View style={[styles.squre,{width:squreWidth, opacity}]} key = {i.toString()}/>
            })}
        </View>
    )
}

export default Paginator;


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:64,
        justifyContent:"center"
    },
    squre: {
        height: 5,
        borderRadius: 3,
        backgroundColor: '#16A4F4',
        marginHorizontal: 8,
        borderWidth:0.2,
        borderColor:'grey',
        
    }
})