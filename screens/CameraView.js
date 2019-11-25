import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";

import * as Permissions from "expo-permissions";
import {Camera} from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import { BackHandler } from "react-native"

import CircleBt from "../components/CircleBt";
import Toasts from "../components/Toasts";


class CameraView extends Component {
    state = {
        hasCameraPermission: false,
        cameraType: Camera.Constants.Type.back
    }

    static navigationOptions = {
        title: "CameraView",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }

    async componentDidMount() {
        let {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }



    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    }

    handleBackPress = () => {
        Toasts.short('wracamy');

    }


    clickBt = async (type) => {
        Toasts.short(type);

        if (type === 'retweet') {
            const cameraType = this.state.cameraType;
            this.setState({
                cameraType: cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
            })
        } else if (type === 'settings') {

        } else {
            if (this.camera) {
                let photo = await this.camera.takePictureAsync();
                let asset = await MediaLibrary.createAssetAsync(photo.uri);
                // alert(JSON.stringify(asset, null, 4))
            }
        }
    }

    render() {
        if (!this.state.hasCameraPermission) {
            return <View style={{backgroundColor: Colors.bc, flex: 1}}/>;
        } else {
            return (
                <View style={styles.cont}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; // Uwaga: referencja do kamery używana później
                        }}
                        style={styles.camera}
                        type={this.state.cameraType}>
                        <View style={styles.buttons}>
                            <CircleBt type='retweet' size={40} click={this.clickBt}/>
                            <CircleBt type='plus' size={60} click={this.clickBt}/>
                            <CircleBt type='settings' size={40} click={this.clickBt}/>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttons: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default CameraView;
