import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import Bt from "../components/Bt";
import Toasts from "../components/Toasts";

import * as MediaLibrary from "expo-media-library";


class DisplayPhoto extends Component {
    state = {
        data: this.props.navigation.state.params.data
    }

    static navigationOptions = {
        title: "One Photo",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }

    remove = async () => {
        Toasts.short('remove');
        await MediaLibrary.deleteAssetsAsync([this.state.data.id]);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.cont}>
                <Image style={styles.image} source={{ uri: this.state.data.uri }}/>
                <Bt text={'remove'} click={this.remove}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.bc
    },
    image: {
        flex: 1
    }
});

export default DisplayPhoto;
