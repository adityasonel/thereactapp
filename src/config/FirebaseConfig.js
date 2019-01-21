import BuildConfig from "./BuildConfig";

var FirebaseConfig = {
    apiKey: BuildConfig.FIREBASE_API_KEY,
    authDomain: BuildConfig.FIREBASE_AUTH_DOMAIN,
    databaseURL: BuildConfig.FIREBASE_DB_URL,
    projectId: BuildConfig.FIREBASE_PROJECT_ID,
    storageBucket: BuildConfig.FIREBASE_STORAGE_BUCKET
};

export default FirebaseConfig;
