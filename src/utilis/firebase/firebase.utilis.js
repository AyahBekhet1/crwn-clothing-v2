// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWjZCamOJ4zVdtN9GulE2tVDtCj32dnk8",
  authDomain: "crwn-clothing-database-6c263.firebaseapp.com",
  projectId: "crwn-clothing-database-6c263",
  storageBucket: "crwn-clothing-database-6c263.appspot.com",
  messagingSenderId: "792533133082",
  appId: "1:792533133082:web:cfd31e96c9e8e26bf2aea3",
};
//1
const firebaseApp = initializeApp(firebaseConfig);
//2
export const googleProvider = new GoogleAuthProvider();
// export const fbProvider =new FacebookAuthProvider()
//3
googleProvider.setCustomParameters({
  prompt: "select_account",
});
//4
export const auth = getAuth();
//5
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //user data doesnt exist

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //user Data exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectstoAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectstoAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//retreival from the actual firebase

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  const q =query(collectionRef)

  const querySnapshot = await getDocs(q)
  
  const categoryMap = querySnapshot.docs.reduce((acc , docSnapshot)=>{
    const {title , items} = docSnapshot.data()

    acc[title.toLowerCase()]=items
    return acc
  },{})

  return categoryMap
};
