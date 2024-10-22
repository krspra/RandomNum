import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to='/login' className='h-10 font-semibold items-center justify-center flex w-20 text-white'>Login</Link>
  )
}

export default LoginButton