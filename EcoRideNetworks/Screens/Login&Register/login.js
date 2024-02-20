import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import MobileForm from "./mobile"
import EmailForm from "./email";


const { width } = Dimensions.get('screen')
const Login = (props) => {
    const [selectedTypeIndex, setselectedTypeIndex] = useState(0);
    const typeLogin = [
        {
            id: 1,
            name: 'Email',
        },
        {
            id: 2,
            name: 'Mobile'
        }
    ]

    const ListType = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.typeContainer}
            >
                {typeLogin.map((type, index) => (
                    <TouchableOpacity key={index}
                        activeOpacity={0.8}
                        onPress={() => setselectedTypeIndex(index)}>
                        <View style={{
                            backgroundColor: selectedTypeIndex == index ? '#009EFD' : 'white',
                            borderColor: '#009EFD',
                            borderWidth: 1,
                            ...styles.typeBtn
                        }}>
                            <Text 
                                style={{ fontSize: 15, color: selectedTypeIndex == index ? 'white' : 'black', marginLeft: 50 }}>{type.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    }



    return (
        <SafeAreaView style={{ alignItems: 'center' }}>
            <View>
                <View>
                    <Image source={require("../../images/assets/Signin.png")} style={{height:250, width:width}}/>              
                    <Text style={{ fontSize: 24, alignSelf: 'center', fontWeight: '800' }}>Sign In</Text>
                    <Text style={styles.note}>
                        "Connect seamlessly with your account using your mobile number or email address to experience effortless sign-in on the go."
                    </Text>

                </View>
            </View>
            <ListType />
            {selectedTypeIndex == 0 ? <EmailForm props={props}/> : <MobileForm props={props}/>}
        </SafeAreaView>

    )
}

export default Login;

const styles = StyleSheet.create({
    typeContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    typeBtn: {
        height: 50,
        width: 175,
        marginRight: -20,
        marginLeft: -20,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    note: {
        fontSize: 16,
        paddingHorizontal: 50,
        textAlign: 'center',
        marginTop: 10
    }

})



