import React from 'react'
import SignUpForm from '../sign-up/sign-up.components'
import SignInForm from '../../components/sign-in/sign-in.components'
import './authentication.style.scss'

const Authentication = () => {
  return (
    <>
      <div className='auth-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  )
}

export default Authentication