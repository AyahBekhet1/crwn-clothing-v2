import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utilis/firebase/firebase.utilis.js";
import FormInput from "../form-input/form-input.component.jsx";

import "./sign-in-form.styles.scss";
import Button ,{BUTTON_TYPE_CLASES} from "../button/button.component.jsx";



const defaultFormFeilds = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFeilds, setFormField] = useState(defaultFormFeilds);

  const { email, password } = formFeilds;


  const resetFormFeild = () => {
    setFormField(defaultFormFeilds);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
         await signInAuthUserWithEmailAndPassword(email,password)
        
      resetFormFeild();
    } catch (error) {
      console.log(error.code);

      if(error.code === 'auth/invalid-credential'){
        alert('incorrect password or email')
      }
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formFeilds, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASES.google} type='button'  onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
