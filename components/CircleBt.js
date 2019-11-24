import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";
import { AntDesign } from '@expo/vector-icons';
import Toasts from "./Toasts";

class CircleBt extends Component {
    state = {

    }

    styles = StyleSheet.create({
        cont: {
            width: this.props.size,
            height: this.props.size,
            borderRadius: 60,
            backgroundColor: Colors.accDark,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    buttonIcon = () => {
        if (this.props.type === 'plus') {
            return <AntDesign name='plus' size={this.props.size - 4} color={Colors.accLight} />
        } else if (this.props.type === 'settings') {
            return <AntDesign name='setting' size={this.props.size - 4} color={Colors.accLight} />
        } else {
            return <AntDesign name='retweet' size={this.props.size - 4} color={Colors.accLight} />
        }
    }

    click = () => {
        this.props.click(this.props.type);
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.cont} onPress={this.click}>
                {this.buttonIcon()}
            </TouchableOpacity>
        );
    }
}

export default CircleBt;
