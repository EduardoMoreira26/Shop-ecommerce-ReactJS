import {
    initializeApp
} from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFJQh32mBIYt5-BYvYZdeioOZdByEJ41g",
    authDomain: "crwn-clothing-db-75622.firebaseapp.com",
    projectId: "crwn-clothing-db-75622",
    storageBucket: "crwn-clothing-db-75622.appspot.com",
    messagingSenderId: "914977159390",
    appId: "1:914977159390:web:9c64d9d061f86036c1ea4f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {
            displayName,
            email
        } = userAuth;

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}