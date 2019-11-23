import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Bt from "../components/Bt";
import Colors from "../constants/Colors";

class Main extends Component {

    static navigationOptions = {
        header: null,
    };


    clickBt = () => {
        this.props.navigation.navigate("Gallery")
    };

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.display}>
                    <Text style={{fontSize: 36, color: Colors.text}}>Camera App</Text>
                    <Text style={{fontSize: 20, color: Colors.text}}>
                        {'Show gallery pictures\ntake picture from camera' +
                        '\nsave photo to device\ndelete photo from device'}
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <Bt text={"START"} click={this.clickBt}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.bc
    },

    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.main
    },

    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Main;
