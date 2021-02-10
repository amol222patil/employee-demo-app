import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { validateEmail } from '../utils'
import { getUserName, getUserPassword } from '../redux/selectors'
import { login } from '../redux/actions'
import profileIcon from '../images/profile.png'
import passwordIcon from '../images/lock.png'

const LoginForm = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const submitHandler = (values) => {
    const { userName, password, login, onSuccessfullyLogin } = props
    const { userName: inputUserName, password: inputPassword } = values
    if(errorMessage){
      setErrorMessage('')
    }
    if (userName.toLowerCase() === inputUserName.toLowerCase() && password.toLowerCase() === inputPassword.toLowerCase()) {
      login()
      onSuccessfullyLogin()
    } else {
      setErrorMessage('The username / password combination is not valid.')
    }
  }

  const validateForm = (values) => {
    const errors = {}
    if (!values.userName) {
      errors.userName = 'Required'
    } else if (!validateEmail(values.userName)) {
      errors.userName = 'Must be valid email'
    }

    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  return (
    <div>
      {errorMessage && <div className='login_error_message' >{errorMessage}</div>}
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={submitHandler}
        validate={validateForm}>
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <div className='input_wrapper'>
              <img className='input_icon' src={profileIcon} />
              <input
                name='userName'
                value={formikProps.values.userName}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                className='input'
                placeholder='Username'
              />
            </div>
            {formikProps.touched.userName && formikProps.errors && formikProps.errors.userName ? (
              <div className='error_message'>{`* ${formikProps.errors.userName}`}</div>
            ) : null}
            <div className='input_wrapper'>
              <img className='input_icon' src={passwordIcon} />
              <input
                name='password'
                type='password'
                value={formikProps.values.password}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                className='input'
                placeholder='Password'
              />
            </div>
            {formikProps.touched.password && formikProps.errors && formikProps.errors.password ? (
              <div className='error_message'>{`* ${formikProps.errors.password}`}</div>
            ) : null}
            
            <button type='submit' className='login_button'>
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

LoginForm.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string
}
LoginForm.defaultProps = {
  userName: '',
  password: ''
}

const mapStateToProps = (state) => ({
  userName: getUserName(state),
  password: getUserPassword(state)
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
