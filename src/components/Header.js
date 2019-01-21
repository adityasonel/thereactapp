import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Share } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    _onPressBack = () => {
        this.props.navigation.goBack();
    };
    _renderBackButton() {
        if (this.props.renderBack) {
            return (
                <TouchableOpacity style={styles.touchableView} onPress={this._onPressBack}>
                    <Ionicons name={"ios-arrow-round-back"} size={24} color={"black"} />
                </TouchableOpacity>
            );
        }
    }
    _onPressMenu = () => {
        this.props.navigation.navigate("AboutAppScreen");
    };
    _renderMenu() {
        if (this.props.renderMenu) {
            return (
                <TouchableOpacity style={styles.touchableView} onPress={this._onPressMenu}>
                    <Ionicons name={"ios-information-circle"} size={24} color={"black"} />
                </TouchableOpacity>
            );
        }
    }
    _onPressShare = () => {
        let shareOptions = {
            message: "Hey, check this application. Awesome application developed on React-Native.\n\nhttps://github.com/adityasonel"
        };
        Share.share(shareOptions)
            .then(action => {
                console.log(action);
            })
            .catch(err => {
                Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
            });
    };
    _renderShare() {
        if (this.props.renderShare) {
            return (
                <TouchableOpacity style={styles.touchableView} onPress={this._onPressShare}>
                    <Ionicons name={"ios-share-alt"} size={24} color={"black"} />
                </TouchableOpacity>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderBackButton()}
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                {this._renderMenu()}
                {this._renderShare()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 48,
        elevation: 2,
        backgroundColor: "white"
    },
    titleStyle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        marginLeft: 16,
        alignSelf: "center",
        flex: 1
    },
    touchableView: {
        width: 48,
        alignItems: "center",
        justifyContent: "center"
    }
});
