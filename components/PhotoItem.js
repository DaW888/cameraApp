import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Toasts from "./Toasts";
import Colors from "../constants/Colors";

class PhotoItem extends Component {
    state = {
        border: null

    }

    styles = StyleSheet.create({
        cont: {
            margin: 2,
        },
        image: {
            width: this.props.width,
            height: this.props.height,

        }
    })

    press = () => {
        this.props.select(true, this.props.data);
        if (!this.state.border) {
            this.props.select(true, this.props.data);
            this.setState({
                border: {
                    borderWidth: 1,
                    borderColor: Colors.main
                }
            })
        } else {
            this.props.select(false, this.props.data);
            this.setState({
                border: null
            })
        }
    }

    longPress = () => {
        Toasts.long('long press');
        this.props.navigation.navigate('DisplayPhoto', {data: this.props.data});
    }

    render() {
        console.log(this.props.data);
        return (
            <TouchableOpacity onPress={this.press} onLongPress={this.longPress} style={[this.state.border, this.styles.cont]}>
                <Image style={this.styles.image} source={{ uri: this.props.data.uri }}/>
            </TouchableOpacity>

        );
    }
}

export default PhotoItem;
