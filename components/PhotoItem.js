import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Toasts from "./Toasts";

class PhotoItem extends Component {
    state = {

    }

    styles = StyleSheet.create({
        cont: {
            margin: 3,
        },
        image: {
            width: this.props.width,
            height: this.props.height,
            margin: 2,

        }
    })

    press = () => {
        Toasts.short('click');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.press}>
                <Image style={this.styles.image} source={{ uri: this.props.data.uri }}/>
            </TouchableOpacity>

        );
    }
}

export default PhotoItem;
