/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';


const IntroScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>

            <Button title='Get started' containerStyle={ styles.end } buttonStyle={ styles.button } titleStyle={ styles.bTitle } onPress={ () => navigation.navigate('Login') } />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    end: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 5,
        borderColor: 'white',
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: Colors.primary
    },
    bTitle: {
        fontSize: 20
    }
})

export default IntroScreen;
