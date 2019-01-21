import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, AlertIOS, Platform } from "react-native";

// require("../assests/images/profile-pic.jpg")

export default class ItemPost extends React.PureComponent {
    _onPressItem = () => {
        if (Platform.OS === "android") {
            ToastAndroid.show("A pikachu appeared nearby!", ToastAndroid.SHORT);
        } else {
            AlertIOS.alert("A pikachu appeared nearby!");
        }
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPressItem} style={styles.container} activeOpacity={1}>
                <Image pointerEvents="none" style={styles.image} source={{ uri: this.props.imagelink }} />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode={"tail"}>
                    {this.props.title}
                </Text>
                <Text style={styles.desc} numberOfLines={3} ellipsizeMode={"tail"}>
                    {this.props.desc}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        elevation: 2,
        backgroundColor: "white",
        flexDirection: "column"
    },
    image: {
        width: "100%",
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    title: {
        color: "#A9A9A9",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8
    },
    desc: {
        color: "black",
        fontSize: 16,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 8
    }
});
