import React, { PureComponent } from "react";
import { StyleSheet, Text, View, StatusBar, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import LinearGradient from "react-native-linear-gradient";

import Ionicons from "react-native-vector-icons/Ionicons";

const iconSize = 20;

export default class ProfileTabScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    _onPressPorfilePic = () => {
        this.props.navigation.navigate("ImageViewScreen");
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header title={"Profile"} renderMenu={true} navigation={this.props.navigation} />

                <View style={styles.topContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#f77062", "#fe5196"]}
                        style={styles.gradientView}
                        pointerEvents="none"
                    />
                    <Text style={styles.title}>Denial Rozar</Text>
                    <Text style={styles.email}>denialrozar@gmail.com</Text>
                    <TouchableOpacity style={styles.imageContainer} onPress={this._onPressPorfilePic} activeOpacity={0.8}>
                        <Image style={styles.image} source={require("../assests/images/profile-pic.jpg")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-medal"} color="#2196f3" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>School</Text>
                            <Text style={styles.textDescription}>The Lawrenceville School</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-person"} color="#009688" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Nick Name</Text>
                            <Text style={styles.textDescription}>r.denial</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-contacts"} color="#ff9800" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Emergency Contact</Text>
                            <Text style={styles.textDescription}>Jessica Curl</Text>
                        </View>
                    </View>
                    <View style={styles.itemView}>
                        <View style={styles.fab}>
                            <Ionicons style={styles.fabIcon} size={iconSize} name={"ios-call"} color="#9c27b0" />
                        </View>
                        <View style={styles.textsView}>
                            <Text style={styles.textTitle}>Emergency Number</Text>
                            <Text style={styles.textDescription}>+1-9876543210</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    topContainer: {
        height: "34%",
        flexDirection: "column"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginTop: 32,
        marginLeft: 32
    },
    email: {
        fontSize: 14,
        fontWeight: "100",
        color: "white",
        marginLeft: 32
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: "absolute",
        right: 32,
        top: 32
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: "absolute",
        borderColor: "rgba(255, 255, 255, 0.6)",
        borderWidth: 2
    },
    bottomContainer: {
        height: "66%"
    },
    gradientView: {
        height: "108%",
        borderBottomLeftRadius: 32,
        position: "absolute",
        top: -88,
        left: 0,
        right: 0,
        bottom: 0,
        transform: [{ rotate: "-30deg" }]
    },
    fab: {
        width: 44,
        height: 44,
        borderRadius: 22,
        elevation: 4,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center"
    },
    fabIcon: {
        alignSelf: "center"
    },
    itemView: {
        flexDirection: "row",
        height: 78,
        alignItems: "center",
        marginLeft: 52
    },
    textsView: {
        marginLeft: 32,
        backgroundColor: "white"
    },
    textTitle: {
        fontSize: 12,
        color: "#A9A9A9"
    },
    textDescription: {
        color: "black",
        fontSize: 16
    }
});
