/**
 * starting point of this "TheReactApp"
 */

console.disableYellowBox = true;
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import * as firebase from "firebase";
import FirebaseConfig from "./src/config/FirebaseConfig";
firebase.initializeApp(FirebaseConfig);

AppRegistry.registerComponent(appName, () => App);
