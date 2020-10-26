import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput
} from 'react-native';

const Signup = props => {
    return (
        <View style={styles.Signup}>
            <View style={styles.InputGroup}>
                <TextInput
                    placeholder='name'
                    style={styles.formInput}>

                </TextInput>
                <TextInput
                    placeholder='surname'
                    style={styles.formInput}>

                </TextInput>
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
                <TouchableOpacity style={styles.Button} onPress={props.authenticate}>
                    <Text style={styles.ButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Signup: {
        justifyContent: 'center',
    },
    InputGroup: {
        alignItems: 'center'
    },
    formInput: {
        height: 40,
        width: "90%",
        backgroundColor: 'rgb(231, 231, 231)',
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

export default Signup;