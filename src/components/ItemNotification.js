import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, ToastAndroid, AlertIOS, Platform } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

let iconSize = 30;

export default class ItemNotification extends React.PureComponent {
    _onPressContainer = () => {
        if (Platform.OS === "android") {
            ToastAndroid.show("A pikachu appeared nearby!", ToastAndroid.SHORT);
        } else {
            AlertIOS.alert("Yippee", "A pikachu appeared nearby!");
        }
    };
    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPressContainer}>
                <View style={styles.container} onPress={this._onPressContainer}>
                    <Ionicons name={"ios-information-circle"} size={iconSize} color={"black"} />
                    <View style={styles.itemView}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.desc} numberOfLines={2} ellipsizeMode="tail">
                            {this.props.desc}
                        </Text>
                    </View>
                    <View style={styles.bottomLine} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 74,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
        marginRight: 16
    },
    itemView: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    },
    desc: {
        fontSize: 12,
        color: "#A9A9A9"
    },
    bottomLine: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 0.6,
        backgroundColor: "#DCDCDC"
    }
});
