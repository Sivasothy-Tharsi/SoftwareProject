
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";



import GetStarted from "./Screens/Common/getStarted";
import SplashScreen from "./Screens/Common/splash";
import OnBording from "./Screens/OnBoarding/onBoarding";
import Login from "./Screens/Login&Register/login";
import Signup from "./Screens/Login&Register/signup";
import OTP from "./Screens/Login&Register/OTP";
import Success from "./Screens/Common/sucessScreen";
import DrawerNavigator from "./Screens/Drawer/DrawerNavigator";


const stack = createNativeStackNavigator();



const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer >
        <stack.Navigator initialRouteName="Splash"
             screenOptions={{ headerShown: false, statusBarColor:'#16A4F4' }}>
             <stack.Screen name="Welcome" component={GetStarted}/>
             <stack.Screen name="Splash" component={SplashScreen} />
             <stack.Screen name="Onboarding" component={OnBording}/>
             <stack.Screen name="Login" component={Login}/>
             <stack.Screen name="SignUp" component={Signup}/>
             <stack.Screen name="OTP" component={OTP}/>
             <stack.Screen name="Success" component={Success}/>
             <stack.Screen name="Drawer" component={DrawerNavigator}/>
        </stack.Navigator>    
    </NavigationContainer>

  )
}



export default App;



