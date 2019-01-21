import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator } from "react-native";
import Header from "../components/Header";
import ItemNotification from "../components/ItemNotification";

let localData = [
    {
        title: "Thanks!",
        desc: "Thanks you very much for using this. Check out my github page for more React-Native applications"
    },
    {
        title: "The React App",
        desc: "This application just trying to showcase the power & wisdom of React-Native"
    },
    {
        title: "Developers are everywhere...",
        desc: "Checkout AboutApp screen for more info about various Third-Party Libraries used in this application"
    }
];

export default class NotificationTabScreen extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            notifications: [],
            isLoading: false
        };
    }
    _renderNotificationList() {
        if (this.state.isLoading) {
            return <ActivityIndicator style={styles.indicatorView} size="large" hidesWhenStopped={true} color="#ADFF2F" />;
        } else {
            return (
                <FlatList
                    extraData={this.state}
                    data={localData}
                    renderItem={({ item }) => <ItemNotification title={item.title} desc={item.desc} />}
                    keyExtractor={item => item.title}
                />
            );
        }
    }
    render() {
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 2000);
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header title={"Notifications"} />

                <View style={styles.mainView}>{this._renderNotificationList()}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mainView: {
        flex: 1
    },
    indicatorView: {
        flex: 1,
        justifyContent: "center"
    }
});
