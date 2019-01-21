import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList, RefreshControl } from "react-native";
import * as firebase from "firebase";

import Header from "../components/Header";
import EmptyHome from "../components/EmptyHome";
import ItemPost from "../components/ItemPost";

export default class HomeTabScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isRefreshing: false
        };
    }
    _fetchData() {
        let db = firebase.database().ref("TheReactApp/Posts");
        this.state.posts = [];
        db.on("value", snapshot => {
            var snapshot = snapshot.val();
            var keys = Object.keys(snapshot);
            for (let i = 0; i < keys.length; i++) {
                // this.setState({ posts: [...this.state.posts, snapshot[keys[i]]] });
                this.state.posts.push(snapshot[keys[i]]);
                this.forceUpdate();
            }
        });
    }
    componentWillMount() {
        this._fetchData();
    }
    _onRefresh() {
        this.setState({ isRefreshing: true });
        this._fetchData();
        setTimeout(() => {
            this.setState({ isRefreshing: false });
        }, 500);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header title={"Home"} renderShare={true} />

                <FlatList
                    contentContainerStyle={styles.flatList}
                    refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this._onRefresh.bind(this)} />}
                    data={this.state.posts}
                    extraData={this.state.posts}
                    ListEmptyComponent={<EmptyHome />}
                    renderItem={({ item }) => <ItemPost title={item.title} desc={item.desc} imagelink={item.imagelink} />}
                    keyExtractor={(item, index) => item.title}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    flatList: {
        flexGrow: 1
    }
});
