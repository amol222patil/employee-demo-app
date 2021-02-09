import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import User from './User'
import { Redirect } from 'react-router-dom'
import { getIsLogged, getUserList } from '../redux/selectors'

const Home = (props) => {
  const { isLogged, userList } = props
  
  if (!isLogged) {
    return <Redirect to='/login' />
  }

  const renderUserList = () => {
    const users = userList.map((user) => <User {...user} />)
    return users
  }

  return (
    <div>
      <div className='home_heading'>Employee List</div>
      <div className='users_container'>
        {userList && userList.length ? (
          renderUserList()
        ) : (
          <div>Users not found</div>
        )}
      </div>
    </div>
  )
}

Home.propTypes = {
  isLogged: PropTypes.bool,
  userList: PropTypes.array
}
Home.defaultProps = {
  isLogged: false,
  userList: []
}

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
  userList: getUserList(state)
})

export default connect(mapStateToProps)(Home)
