import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Alert, StatusBar } from "react-native";
import Header from "../components/Header";

import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const githubIconSize = 24;
let appUrl = "https://github.com/adityasonel/TheReactApp";
let firebaseUrl = "https://firebase.google.com";
let reactNavigationUrl = "https://reactnavigation.org/docs/en/getting-started.html";
let reactNativeVectorIconUrl = "https://github.com/oblador/react-native-vector-icons";
let reactNativeLinearGradient = "https://github.com/react-native-community/react-native-linear-gradient";

export default class AboutAppScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    _onPressFab = value => {
        if (value == 1) {
            Linking.canOpenURL(appUrl)
                .then(supported => {
                    if (supported) Linking.openURL(appUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 2) {
            Linking.canOpenURL(firebaseUrl)
                .then(supported => {
                    if (supported) Linking.openURL(firebaseUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 3) {
            Linking.canOpenURL(reactNavigationUrl)
                .then(supported => {
                    if (supported) Linking.openURL(reactNavigationUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 4) {
            Linking.canOpenURL(reactNativeVectorIconUrl)
                .then(supported => {
                    if (supported) Linking.openURL(reactNativeVectorIconUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 5) {
            Linking.canOpenURL(reactNativeLinearGradient)
                .then(supported => {
                    if (supported) Linking.openURL(reactNativeLinearGradient);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header title={"About App"} renderBack={true} navigation={this.props.navigation} />

                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f093fb", "#f5576c"]} style={styles.card}>
                        <Text style={styles.title}>The React App</Text>
                        <Text style={styles.description}>
                            The React-App is just a catalogue to show power of React-Native mobile developement.{"\n"}This application open-source
                            developed with some other Third-Parties libraries.{"\n\n"}Check it's source code on Github.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(1)} activeOpacity={0.8}>
                            <Ionicons name={"logo-github"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f6d365", "#fda085"]} style={styles.card}>
                        <Text style={styles.title}>Firebase</Text>
                        <Text style={styles.description}>
                            There are various sevices offered online such as storage, online processing, realtime database, authorisation of user etc.
                            Google developed a platform called Firebase that provide all these online services.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(2)} activeOpacity={0.8}>
                            <Ionicons name={"ios-globe"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#84fab0", "#8fd3f4"]} style={styles.card}>
                        <Text style={styles.title}>React Navigation</Text>
                        <Text style={styles.description}>
                            React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution
                            written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(3)} activeOpacity={0.8}>
                            <Ionicons name={"ios-globe"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#6991c7", "#a3bded"]} style={styles.card}>
                        <Text style={styles.title}>React-Native Vector Icons</Text>
                        <Text style={styles.description}>
                            Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(4)} activeOpacity={0.8}>
                            <Ionicons name={"logo-github"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#0fd850", "#f9f047"]} style={styles.card}>
                        <Text style={styles.title}>React-Native Linear Gradient</Text>
                        <Text style={styles.description}>A {"<LinearGradient />"} component for react-native.</Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(5)} activeOpacity={0.8}>
                            <Ionicons name={"logo-github"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>

                    <Text style={styles.bottomTitle}>
                        Made with <Ionicons name={"ios-heart"} size={14} color={"red"} /> in India
                    </Text>
                    <Text style={styles.textVersion}>version-1.0</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    card: {
        height: 180,
        backgroundColor: "white",
        elevation: 4,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 12,
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    description: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        marginTop: 4
    },
    fab: {
        flexDirection: "column",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "white",
        elevation: 8,
        position: "absolute",
        bottom: 16,
        right: 16
    },
    githubIcon: {
        alignSelf: "center"
    },
    bottomTitle: {
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop: 8
    },
    textVersion: {
        color: "#A9A9A9",
        fontWeight: "bold",
        alignSelf: "center",
        paddingBottom: 8,
        fontSize: 10
    }
});
