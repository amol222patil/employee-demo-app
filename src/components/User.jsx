import React from 'react'
import PropTypes from 'prop-types'
import userIcon from '../images/profile-color.png'

const User = (props) => {
  const { name, email, phoneNo, age, gender } = props
  return (
    <div className='user_wrapper'>
      <div className='user_content'>
        <div className='left_container'>
          <div className='name_icon'>
            <img src={userIcon} className='user_icon' />
            <div>
              <div className='name'>{name}</div>
              <div className='age_gender_container'>
                <div className='age_gender'>
                  <span className='key_text'>{`Age: `}</span> {`${age}yrs`}
                </div>
                <div>
                  <span className='key_text'>{`Gender: `}</span>{' '}
                  {`${gender.toLowerCase().startsWith('m') ? 'M' : 'F'}`}
                </div>
              </div>
            </div>
          </div>
          <div className='email_phone'>{email}</div>
          <div className='email_phone'>{phoneNo}</div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string, 
  email: PropTypes.string, 
  phoneNo: PropTypes.string,
  age: PropTypes.string, 
  gender: PropTypes.string
}
User.defaultProps = {
  name: '', 
  email: '', 
  phoneNo: '',
  age: '', 
  gender: ''
}

export default User
