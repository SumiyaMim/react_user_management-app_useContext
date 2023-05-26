import React, {useContext} from 'react'
import User from './User'
import './style.css'
import { UserContext } from './Context/UserContext'
import { useUserContext } from './Hooks/useUserContext'

const Users = () => {

    const {users} = useUserContext() // Custom hook - helps to use useContext
    // const {users} = useContext(UserContext)

  return (
    <section className='users'>
        {users.map(user => <User key={user.id} user={user}/>)}
    </section>
  )
}

export default Users
