import React from 'react'
import { Link } from 'react-router-dom'

function SignupButton() {
  return (
    <Link to='/signup' className='h-10 rounded-lg font-bold items-center justify-center flex bg-blue-300 w-20 text-white'>Signup</Link>
  )
}

export default SignupButton