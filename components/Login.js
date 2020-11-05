import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ActivityIndicator
} from 'react-native';

const Login = props => {

    let button;

    return (
        <View style={styles.Login}>
            <View style={styles.InputGroup}>
                <TextInput
                    placeholder='email'
                    style={styles.formInput}>

                </TextInput>
                <TextInput
                    secureTextEntry
                    placeholder='password'
                    style={styles.formInput}>
                </TextInput>
            </View>
            <View style={styles.ButtonHolder}>
                {
                    props.isloading
                        ?
                        <ActivityIndicator size="small" color='grey' />
                        :
                        <TouchableOpacity style={styles.Button} onPress={props.authenticate}>
                            <Text style={styles.ButtonText}>Log in</Text>
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Login: {
        justifyContent: 'center',
    },
    InputGroup: {
        alignItems: 'center'
    },
    formInput: {
        height: 40,
        width: "90%",
        borderBottomWidth: 1,
        marginVertical: 10,
        fontSize: 22,
        padding: 5,
        borderRadius: 3,
        color: 'rgb(36, 36, 36)',
    },
    ButtonHolder: {
        paddingLeft: '5%',
        marginVertical: 10,
    },
    Button: {
        backgroundColor: 'rgb(36, 36, 36)',
        width: '25%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3

    },
    ButtonText: {
        color: 'white',
        fontSize: 18
    }
})

export default Login;