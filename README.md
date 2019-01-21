# TheReactApp 🚀

A powerful React-Native Modules &amp; UI Components showcase. That show you the power and wisdom of React-Native in Mobile Application Development. TheReactApp is a mobile application template built with some others powerfull react native libraries like [React Navigation](https://reactnavigation.org), [React-Native Vector Icon](https://github.com/oblador/react-native-vector-icons), [React-Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient). Thanks to all respective developers - this libraries is all you need to build your react native app faster. Working Android Application demo coming soon on [Google PlayStore](https://play.google.com/store).

If you are newbie react-native developer there is many more things in this repo for you.

## Screenshots

<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/playback.gif" width="200" height="350" />
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-1.png" width="200" height="350" />
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-2.png" width="200" height="350" />
<img src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-3.png" width="200" height="350" /> 
<img align="left" src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-4.png" width="200" height="350" />
<img src="https://github.com/adityasonel/TheReactApp/blob/master/sample/ss-5.png" width="200" height="350" />

## What's inside

-   Up-to-date code with AndroidX and XCode libraries
-   UI/UX Design from best dribbble templates
-   Modular and well-documented structure for application code
-   React Navigation for simple navigation
-   React-Native Linear Gradient for awesome gradient views
-   Icons are rendered with the help of React-Native Vector Icon

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

That's it! Cool, right?

## How to use

[Firebase](https://firebase.google.com) is used to render sample posts on HomeTab. For fetch data from firebase, you have to add your firebase keys in `FirebaseConfig.js` file

```
var FirebaseConfig = {
    apiKey: BuildConfig.FIREBASE_API_KEY,
    authDomain: BuildConfig.FIREBASE_AUTH_DOMAIN,
    databaseURL: BuildConfig.FIREBASE_DB_URL,
    projectId: BuildConfig.FIREBASE_PROJECT_ID,
    storageBucket: BuildConfig.FIREBASE_STORAGE_BUCKET
};
```

Get all your firebase keys and add here at `src/config/FirebaseConfig.js`. And that's all!!!

For more info about how to add firebase to react-native application check this [firebase blog post](https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html).

And there is many more sparking things coming in future...

## Contributing

If you find any problems, please [open an issue](https://github.com/adityasonel/TheReactApp/issues/new) or submit a fix as a pull request.

## License

[MIT License](LICENSE)
