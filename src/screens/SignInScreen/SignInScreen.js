import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native"

import Logo from "../../../assets/images/muerlogo.png"

// components import
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton"

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions()
    // height: height * 0.3 - means that the height is 30% of the screen

    // sign In function
    const onSignInPressed = () => {
        console.warn("Sign in pressed")
    }

    // forgot password function
    const onForgotPasswordPressed = () => {
        console.warn("Sign in pressed")
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />

            {/* Username & Password inputs */}
            <CustomInput placeholder="username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry/>

            {/* Sign in */}
            <CustomButton onPress={onSignInPressed} text="Sign In"/>

            {/* Forgot password */}
            <CustomButton onPress={onForgotPasswordPressed} text="Forgot Password?" type="TERTIARY"/>

            {/* Social Auth */}

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    }, 

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
        
    }
})

export default SignInScreen