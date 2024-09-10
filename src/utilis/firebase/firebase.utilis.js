// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore ,doc , setDoc ,getDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBWjZCamOJ4zVdtN9GulE2tVDtCj32dnk8",
  authDomain: "crwn-clothing-database-6c263.firebaseapp.com",
  projectId: "crwn-clothing-database-6c263",
  storageBucket: "crwn-clothing-database-6c263.appspot.com",
  messagingSenderId: "792533133082",
  appId: "1:792533133082:web:cfd31e96c9e8e26bf2aea3"
};
//1
const firebaseApp = initializeApp(firebaseConfig);
//2
export const provider = new GoogleAuthProvider()
//3
provider.setCustomParameters({
  prompt:'select_account'
})
//4
export const auth = getAuth()
//5
export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider)


//firestore

export const db=getFirestore()

export const createUserDocumentFromAuth = async (userAuth)=> {
  const userDocRef = doc(db , 'users' , userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  //user data doesnt exist
  
  if(!userSnapshot.exists()){  
    const {displayName , email} = userAuth
    const createdAt = new Date()

    try{

      await setDoc(userDocRef , {
        displayName,
        email,
        createdAt
      })
    }catch (error){
      console.log('error creating the user' , error.message);
      
    }
  }

  //user Data exist 
  return userDocRef
  
}