
/*
default
inverted
google sign in

*/

import {BaseButton , GoogleSignInButton ,InvertedButton} from'./button.styles.jsx'


export const BUTTON_TYPE_CLASES={
    base:'base',
google :'google-sign-in',
inverted : 'inverted'
}

const getButton =(buttonType = BUTTON_TYPE_CLASES.base)=>(
    {
        [BUTTON_TYPE_CLASES.base] : BaseButton,
        [BUTTON_TYPE_CLASES.google] : GoogleSignInButton,
        [BUTTON_TYPE_CLASES.inverted] : InvertedButton,

    }[buttonType]
)


const Button =({children , buttonType , ...others})=>{
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...others} >
            {children}
        </CustomButton>
    )
}

export default Button