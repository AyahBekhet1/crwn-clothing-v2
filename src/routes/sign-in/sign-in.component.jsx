
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utilis/firebase/firebase.utilis.js"

const SignIn = () =>{

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
       const userDocRef =await  createUserDocumentFromAuth(user)
        console.log(user);
        
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}


export default SignIn