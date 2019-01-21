import React, { Component } from "react";
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { Platform, Easing, Animated } from "react-native";

import HomeTabScreen from "./src/screens/HomeTabScreen";
import NotificationTabScreen from "./src/screens/NotificationTabScreen";
import ProfileTabScreen from "./src/screens/ProfileTabScreen";

import AboutAppScreen from "./src/screens/AboutAppScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

const iconSize = 26;

let SlideFromRight = (index, position, width) => {
    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0]
    });
    const slideFromRight = { transform: [{ translateX }] };
    return slideFromRight;
};

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 320,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index, route } = scene;
            const params = route.params || {}; // <- That's new
            const transition = params.transition || "SlideFromRight"; // <- That's new
            return {
                SlideFromRight: SlideFromRight(index, position, width)
            }[transition];
        }
    };
};

const TabStackNavigator = createBottomTabNavigator(
    {
        HomeTab: {
            screen: HomeTabScreen,
            navigationOptions: {
                title: "Home",
                tabBarIcon: ({ tintColor }) => {
                    return <Ionicons name={"ios-home"} size={24} color={tintColor} />;
                }
            }
        },
        NotificationTab: {
            screen: NotificationTabScreen,
            navigationOptions: {
                title: "Notifications",
                tabBarIcon: ({ tintColor }) => {
                    return <Ionicons name={"ios-notifications"} size={iconSize} color={tintColor} />;
                }
            }
        },
        ProfileTab: {
            screen: ProfileTabScreen,
            navigationOptions: {
                title: "Profile",
                tabBarIcon: ({ tintColor }) => {
                    return <Ionicons name={"ios-contact"} size={iconSize} color={tintColor} />;
                }
            }
        }
    },
    {
        initialRouteName: "HomeTab",
        backBehavior: "initialRoute",
        tabBarOptions: {
            activeTintColor: "black",
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: "white"
            }
        }
    }
);

const AppStack = createStackNavigator(
    {
        TabStack: {
            screen: TabStackNavigator
        },
        AboutAppScreen: {
            screen: AboutAppScreen
        }
    },
    {
        initialRouteName: "TabStack",
        headerMode: "none",
        mode: Platform.OS === "ios" ? "modal" : "card",
        transitionConfig: Platform.OS === "android" ? TransitionConfiguration : ""
    }
);

const AppContainer = createAppContainer(AppStack);

onNavigationStateChange = (prevState, newState, action) => {
    console.log("prevState: ", prevState);
    console.log("newState: ", newState);
    console.log("action: ", action);
};

export default class App extends Component {
    render() {
        return <AppContainer onNavigationStateChange={this.onNavigationStateChange} />;
    }
}
