import React, {Component} from 'react';
import {View, Text, StyleSheet, ToastAndroid, FlatList, Dimensions} from 'react-native';
import Bt from "../components/Bt";
import Colors from "../constants/Colors";
import * as MediaLibrary from "expo-media-library";


import * as Permissions from "expo-permissions";
import Toasts from "../components/Toasts";
import PhotoItem from "../components/PhotoItem";


class Gallery extends Component {

    state = {
        images: null,
        windowWidth: Dimensions.get('window').width,
        windowHeight: Dimensions.get('window').height,
        number: 4
    }

    static navigationOptions = {
        title: "Gallery",
        headerStyle: {
            backgroundColor: Colors.accLight,
        },
        headerTitleStyle: {
            color: Colors.main
        },
        headerTintColor: Colors.main
    }

    async componentDidMount() {
        let {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('brak uprawnien do czytania zdjec z galerii')
        }

        this.getImages();
    }

    getImages = async () => {
        let arrImages = await MediaLibrary.getAssetsAsync({
            first: 10,
            mediaType: 'photo'
        });

        let arrFlat = arrImages.assets.map(el => {
            return el;
        });

        //! alert(JSON.stringify(arrFlat, null, 4));
        this.setState({
            images: arrFlat
        })
    }

    changeView = () => {
        console.log('change View');
        Toasts.short(String(this.state.number));
        if (this.state.number !== 1) {
            this.setState({
                number: 1,
                windowHeight: Dimensions.get('window').height/4,
            })
        } else {
          this.setState({
              number: 4,
              windowHeight: Dimensions.get('window').height,
          })
        }
    }

    openCamera = () => {
        console.log('open camera');
        this.props.navigation.navigate("Camera");

    }

    removeSelected = () => {
        console.log('remove selected');
        Toasts.short('Select Images to Remove');
    }

    select = (sel, data) => {
        if(sel) {
            Toasts.short('Selected');
        } else {
            Toasts.short('UnSelected');
        }

    }



    getElementWidth = () => {
        return parseInt(this.state.windowWidth/this.state.number - 6)
    };

    getElementHeight = () => {
        return parseInt(this.state.windowHeight/this.state.number - 6)
    }

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.buttons}>
                    <Bt textStyle={styles.btTextStyle} text="Grid / List" click={this.changeView}/>
                    <Bt textStyle={styles.btTextStyle} text="Open Camera" click={this.openCamera}/>
                    <Bt textStyle={styles.btTextStyle} text="Remove Selected" click={this.removeSelected}/>
                </View>

                <View style={styles.grid}>
                    <FlatList
                        key={this.state.number}
                        data={this.state.images} keyExtractor={(item, index) => item + index} numColumns={this.state.number}
                        renderItem={({item}) => <PhotoItem key={item.modificationTime} data={item}
                                                           width={this.getElementWidth()} height={this.getElementHeight()}
                                                           select={this.select} navigation={this.props.navigation}/>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.bc,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    grid: {
        flex: 18,
        justifyContent: 'center',
        flexDirection: 'row',

    },
    btTextStyle: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: Colors.text,
    }
});

export default Gallery;
