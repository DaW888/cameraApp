import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";

class Camera extends Component {
    state = {

    }

    static navigationOptions = {
        title: "Camera",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }


    render() {
        return (
            <View style={styles.cont}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
    },
});

export default Camera;
