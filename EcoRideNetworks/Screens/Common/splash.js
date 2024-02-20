import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated, StatusBar } from 'react-native';
import { myColors } from './utils/myColors';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  const imageScale = new Animated.Value(0.1);

  useEffect(() => {
    Animated.timing(imageScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 2000); // 2000 milliseconds (2 seconds) for demonstration purposes
    });
  }, [navigation, imageScale]);

  return (
    <LinearGradient
      colors={['rgb(22, 164, 244)', 'rgb(49, 151, 242)', 'rgb(6, 59, 163)']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar style='light' backgroundColor={myColors.primary} />
      <Animated.Image
        source={require('../../images/assets/icon.png')}
        style={[styles.image, { transform: [{ scale: imageScale }] }]}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myColors.primary,
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default SplashScreen;


