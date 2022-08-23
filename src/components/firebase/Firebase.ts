import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyDkx3HI_HoiJoHh5-7P-M8doghOaaFGRyk",
    authDomain: "stackhub-multiplatform.firebaseapp.com",
    projectId: "stackhub-multiplatform",
    storageBucket: "stackhub-multiplatform.appspot.com",
    messagingSenderId: "848283610979",
    appId: "1:848283610979:web:03a17c2501352d147f6d56",
    measurementId: "G-7X1W56PTV8"
}
const firebase = initializeApp(config);




export default firebase;

export function firebaseAuth() {
    return getAuth(firebase);

}
export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5173/signup',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
};
