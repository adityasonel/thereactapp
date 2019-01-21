import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class EmptyHome extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../assests/images/loading.png")} style={styles.loadingImage} />
                <Text style={styles.text}>Fetching data...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loadingImage: {
        width: 42,
        height: 42
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 16
    }
});
