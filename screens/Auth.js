import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Alert
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Login from '../components/Login';
import Signup from '../components/Signup';

import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/authAction';

let Auth = props => {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    let form = null;

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error.message, [{ text: 'Okay' }]);
        }
    }, [error]);

    const auth = async () => {
        setLoading(true)
        if (isLogin) {
            try {
                await dispatch(actions.login("email@gmail.com", "password"));
                setLoading(false)
                props.navigation.navigate('drawer');
            } catch (err) {
                setError(err)
            }
        }
        else {
            try {
                await dispatch(actions.signup("email@gmail.com", "password"));
                setLoading(false)
                props.navigation.navigate('drawer');
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        }
    }

    if (isLogin) {
        form = <Login authenticate={() => auth()}></Login>
    } else {
        form = <Signup authenticate={() => auth()}></Signup>
    }

    const changeForm = islogin => setIsLogin(!islogin);

    return (
        <ScrollView contentContainerStyle={styles.Auth}>
            <View style={styles.head}>
                <EvilIcons name='user' style={styles.icon} />
            </View>

            {form}

            <View style={styles.foot}>
                <View style={styles.footQuestion}>
                    <Text style={styles.footQuestion}>
                        {isLogin ? "Don't" : "Already"} have an account?</Text>
                </View>
                <TouchableOpacity style={styles.footAnswer} onPress={() => changeForm(isLogin)}>
                    <Text style={styles.footAnswer}>
                        {isLogin ? "Sign up" : "Login"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Auth: {
        justifyContent: 'space-between'
    },
    head: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        marginTop: 50
    },
    icon: {
        fontSize: 400,
        color: 'black',
        textAlign: 'center'
    },
    foot: {
        marginLeft: '5%',
        justifyContent: 'space-between',
        marginTop: 40
    },
    footQuestion: {
        color: 'rgb(22, 47, 47)',
        fontSize: 16
    },
    footAnswer: {
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 18,
        marginTop: 4,
        borderBottomColor: 'black',
    },
})

export default Auth;