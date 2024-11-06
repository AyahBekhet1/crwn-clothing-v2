import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilis/firebase/firebase.utilis.js"
import FormInput from "../form-input/form-input.component.jsx"

import './sign-up-form.styles.scss'
import Button from "../button/button.component.jsx"


const defaultFormFeilds = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm =()=>{

    const [formFeilds , setFormField] = useState(defaultFormFeilds)


    const {displayName , email ,password , confirmPassword } =formFeilds


    const resetFormFeild = () =>{
        setFormField(defaultFormFeilds)
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password dont match')
            return
        }

        try {
           const {user} = await createAuthUserWithEmailAndPassword(email , password)
            
           await createUserDocumentFromAuth(user , {displayName})
           
           resetFormFeild()
           
            
        } catch (error) {
           if( error.code == 'auth/email-already-in-use'){
            alert('cannot create user email already in use')
           }
            console.log(error);
            
        }
    }
    
    const handleChange = (e)=>{
        const {name , value} = e.target
        
        setFormField({...formFeilds , [name]:value})
        
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span >Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name'
                type="text" required onChange={handleChange} name="displayName" value={displayName}  />
               
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                
                <FormInput label='Password' type='password' onChange={handleChange} required name='password' value={password} />
                
               
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                
                
                <Button  type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm