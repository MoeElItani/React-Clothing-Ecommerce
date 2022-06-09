import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../../components/form-input/form-input.components'
import './sign-up.styles.scss'
import Button from '../../components/button/button.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('email already in use')
      } else if (err.code === 'auth/weak-password') {
        alert('password too short')
      } else {
        console.error('user creation encountered an error:', err);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [ name ]: value })
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name'
          inputOptions={{
            required: true,
            type: 'text',
            onChange: handleChange,
            name: 'displayName',
            value: displayName
          }}
        />
        <FormInput label='Email'
          inputOptions={
            {
              required: true,
              type: 'email',
              onChange: handleChange,
              name: 'email',
              value: email
            }
          }
        />
        <FormInput label='Password'
          inputOptions={
            {
              required: true,
              type: 'password',
              onChange: handleChange,
              name: 'password',
              value: password
            }
          }
        />
        <FormInput label='Confirm Password'
          inputOptions={
            {
              required: true,
              type: 'password',
              onChange: handleChange,
              name: 'confirmPassword',
              value: confirmPassword
            }
          }
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm