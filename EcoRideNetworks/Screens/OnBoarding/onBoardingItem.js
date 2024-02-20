
import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

const OnBordingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image style={[styles.image, { width: width * 0.8 }]} source={item.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnBordingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20 // Adjust the spacing as needed
    },
    description: {
        fontSize: 14,
        fontWeight: '300',
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 20 // Adjust the spacing as needed
    },
    image: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 20, // Adjust the spacing as needed
    }
})
