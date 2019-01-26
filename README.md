# TheReactApp 🚀

A powerful React-Native Modules &amp; UI Components showcase. That show you the power and wisdom of React-Native in Mobile Application Development. TheReactApp is a mobile application template built with some others powerfull react native libraries like [React Navigation](https://reactnavigation.org), [React-Native Vector Icon](https://github.com/oblador/react-native-vector-icons), [React-Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient). Thanks to all respective developers - this libraries is all you need to build your react native app faster. Working Android Application demo coming soon on [Google PlayStore](https://play.google.com/store). For now you can download working APK here, [Download - TheReactApp](https://github.com/adityasonel/TheReactApp/raw/master/sample/thereactapp.apk)

If you are newbie React-Native Developer then this repo is 110% for you.

## Screenshots

<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/playback.gif" width="200" height="350" />
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-1.png" width="200" height="350" />
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-2.png" width="200" height="350" />
<img src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-3.png" width="200" height="350" /> 
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-4.png" width="200" height="350" />
<img src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-5.png" width="200" height="350" />

## What's inside

-   [x] Up-to-date code with androidx and xcode libraries
-   [x] UI/UX Design from best dribbble templates
-   [x] Firebase Database Integration
-   [x] Integrate React-Navigation
-   [x] Integrate React-Native Linear Gradient
-   [x] Use React-Native Vector Icon
-   [ ] Transitions with React Navigation Fluid Transition
-   [ ] Redux Store integration
-   [ ] Authentication through firebase
-   [ ] Firebase Cloudstore integration
-   [ ] Support for large screen devices

All uncheck features and many more sparking things are coming in future.

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/adityasonel/TheReactApp.git

# Install dependencies
yarn install

or

npm install
```

#### 2. Link all native dependencies:

```
react-native link
```

That's it! Cool, right?

#### 3. Integrate Firebase

[Firebase Database](https://firebase.google.com) is used to render sample data on HomeTab. For fetch data from firebase, you have to add your firebase keys in `FirebaseConfig.js` file that is,

```
var FirebaseConfig = {
    apiKey: BuildConfig.FIREBASE_API_KEY,
    authDomain: BuildConfig.FIREBASE_AUTH_DOMAIN,
    databaseURL: BuildConfig.FIREBASE_DB_URL,
    projectId: BuildConfig.FIREBASE_PROJECT_ID,
    storageBucket: BuildConfig.FIREBASE_STORAGE_BUCKET
};
```

Get all your firebase keys from [Firebase Console](https://console.firebase.google.com/) and add here at `src/config/FirebaseConfig.js`. And that's all!!!

For more info about how to add firebase to react-native application check this [firebase blog post](https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html).

## Currently known issue

As i stated above i am using latest androidx library in this project. But `react-native-gesture-handler` is still on v4 version of android sdk. So when you try to run application by `react-native run-android`, you can get an error as

```
error: package android.support.v4.util does not exist
```

#### Solving with android studio

If you are familiar with android studio, you can solve this error by just import latest dependencies. Search for files `RNGestureHandlerEvent.java` and `RNGestureHandlerStateChangeEvent.java` in android studio, replace older version dependencies with newer version. There you go, everything is perfect. Just run application again.

#### Solving without android studio

But if you are not want to open android studio you can also solve this issue but in much longer way. Search for this to files in project `RNGestureHandlerEvent.java` and `RNGestureHandlerStateChangeEvent.java` or go to file location in your system.

That is normally, `node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/` search for above two files and replace this line

```bash
import android.support.v4.util.Pools;

# with

import androidx.core.util.Pools;
```

There you go, everything is perfect. Just run application again. But i am not recommending this way because this is not relevant method to solve dependencies or library version issues in android developement.

## Contributing

If you find any problems, please [open an issue](https://github.com/adityasonel/TheReactApp/issues/new) or submit a fix as a pull request.

## License

[MIT License](LICENSE)
