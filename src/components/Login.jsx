import React from 'react'
import LoginForm from './LoginForm'
import '../App.css'

const Login = (props) => {
  const onSuccessfullyLogin = () => {
    const { history } = props
    history.push('/')
  }
  return (
    <div className='login_container'>
      <div className='login_inner_container'>
        <div className='heading'>Login</div>
        <LoginForm onSuccessfullyLogin={onSuccessfullyLogin} />
      </div>
    </div>
  )
}

export default Login
