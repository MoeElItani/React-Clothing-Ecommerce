import React from 'react'
import { useState, useContext } from 'react'
import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth,
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.components'
import './sign-in.styles.scss'
import Button from '../button/button.component'
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
   email: '',
   password: '',
}

const SignInForm = () => {
   const [formFields, setFormFields] = useState(
      defaultFormFields
   )
   const { email, password } = formFields

   const { setCurrentUser } = useContext(UserContext)

   const resetFormFields = () => {
      setFormFields(defaultFormFields)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      try {
         const { user } =
            await signInAuthUserWithEmailAndPassword(
               email,
               password
            )
         setCurrentUser(user)
         resetFormFields()

         alert(`Welcome Back ${user.email}`)
      } catch (err) {
         switch (err.code) {
            case 'auth/wrong-password':
               alert('Incorrect Password')
               break

            case 'auth/user-not-found':
               alert('User not found')
               break

            case 'auth/too-many-requests':
               alert(
                  'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
               )
               break

            default:
               console.log(err)
               break
         }
      }
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormFields({ ...formFields, [name]: value })
   }

   const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup()
   }

   return (
      <div className='sign-up-container'>
         <h2>Already have an account?</h2>
         <span>Sign ip with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label='Email'
               inputOptions={{
                  required: true,
                  type: 'email',
                  onChange: handleChange,
                  name: 'email',
                  value: email,
               }}
            />
            <FormInput
               label='Password'
               inputOptions={{
                  required: true,
                  type: 'password',
                  onChange: handleChange,
                  name: 'password',
                  value: password,
               }}
            />

            <div className='buttons-container'>
               <Button type='submit'>Sign In</Button>
            </div>
         </form>
      </div>
   )
}

export default SignInForm
