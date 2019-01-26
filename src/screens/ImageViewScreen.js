import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ImageViewScreen extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>ImageViewScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
