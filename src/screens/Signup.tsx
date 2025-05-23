import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password,setPasssword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput placeholder="Enter  Name" placeholderTextColor="black" style={[styles.input, { marginTop: 20 }]} value={name} onChangeText={setName}/>
                <TextInput placeholder="Enter Email" placeholderTextColor="black" style={[styles.input, { marginTop: 20 }]} value={email} onChangeText={setEmail}/>
                <TextInput placeholder="Enter Mobile Number" placeholderTextColor="black" style={[styles.input, { marginTop: 20 }]} keyboardType={'number-pad'} value={mobile} onChangeText={setMobile}/>
                <TextInput placeholder="Enter Password" placeholderTextColor="black" style={[styles.input, { marginTop: 20 }]} value={password} onChangeText={setPasssword}/>
                <TextInput placeholder="Confirm Password" placeholderTextColor="black" style={[styles.input, { marginTop: 20 }]} value={confirmPassword} onChangeText={setConfirmPassword}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.orLogin}>Or Login</Text>
            </View>
        </ScreenWrapper>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        color: 'black',
        alignSelf: 'center',
        marginTop: 100,
        fontWeight: '600',
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        alignSelf: 'center',
        paddingLeft: 20,
    },
    btn: {
        width:'90%',
        height: 50,
        backgroundColor: 'purple',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    },
    orLogin: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        textDecorationLine: 'underline',
    },
});
export default Signup;
