import { createSelector } from 'reselect'

export const getUserDetails = (state) => {
    return state && state.userDetails
}

export const getUserList = (state) => {
    return state && state.userList
}

export const getSpecificUserDetailsValue = (prop) => createSelector(
    getUserDetails,
    (userDetails) => userDetails && userDetails[prop]
)

export const getUserName = getSpecificUserDetailsValue('userName')
export const getUserPassword = getSpecificUserDetailsValue('password')
export const getIsLogged = getSpecificUserDetailsValue('isLogged')