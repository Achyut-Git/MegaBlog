import React, { useState } from 'react'
import userContext from '../context/userContext'
import { useContext } from 'react'

function Profile() {

const {user} = useContext(userContext)

return user ? "Welcome "+ user.userName : 'Please login'
   
  

}

export default Profile