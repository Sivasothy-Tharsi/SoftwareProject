
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, Pressable, Dimensions, ScrollView } from 'react-native';
import { myColors } from './utils/myColors';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetStarted = (props) => {
    const [firstLaunch, setFirstLaunch] = useState(false);

    useEffect(() => {
        async function checkFirstLaunch() {
            try {
                const value = await AsyncStorage.getItem('firstLaunch');
                if (value === null) {
                    setFirstLaunch(true);
                    await AsyncStorage.setItem('firstLaunch', 'false');
                }
            } catch (error) {
                console.error('Error retrieving firstLaunch status:', error);
            }
        }

        checkFirstLaunch();
    }, []);

    const handleGetStarted = () => {
        // Navigate to appropriate screen based on firstLaunch state and user login status
        if (firstLaunch) {
            props.navigation.navigate('Onboarding');
        } else {
            // Check if user is logged in, replace 'isLoggedIn' with your actual logic
            const isLoggedIn = true; // Replace with your actual logic to check if user is logged in
            if (isLoggedIn) {
                props.navigation.navigate('Drawer');
            } else {
                props.navigation.navigate('Login');
            }
        }
    };

    return (
        <LinearGradient
            colors={['rgb(22, 164, 244)', 'rgb(49, 151, 242)', 'rgb(6, 59, 163)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <StatusBar style='light' backgroundColor={myColors.primary} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={require('../../images/assets/Welcome.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>EcoRideNetworks</Text>
                    <Text style={styles.subText}>
                        "Pedal into convenience with our bicycle sharing system – where every ride begins at the click of a button!"
                    </Text>
                </View>
                <Pressable style={styles.btn} onPress={handleGetStarted}>
                    <Text style={styles.btnText}>Get Started</Text>
                </Pressable>
            </ScrollView>
        </LinearGradient>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: '80%',
        height: 50,
        borderColor: '#E2F0F9',
        borderWidth: 1,
        backgroundColor: '#E2F0F9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    image: {
        width: '100%',
        maxHeight: '50%',
        aspectRatio: 1.0, // Adjust aspect ratio according to your image
        marginBottom: 20,
        
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    mainText: {
        fontSize: 32,
        color: myColors.third,
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: myColors.third,
        paddingHorizontal: 25,
        textAlign: 'center',
    },
});



