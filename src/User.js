import React, { useContext } from 'react'
import './style.css'
import { UserContext } from './Context/UserContext'
import { useUserContext } from './Hooks/useUserContext'

const User = ({user}) => {

    const {id, username} = user
    const {users, setUsers} = useUserContext() // Custom hook - helps to use useContext
    // const {users, setUsers} = useContext(UserContext)

    const handleDelete = (id) => {
        // handleDeleteUser(id)
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

  return (
    <div className='user'>
        <h3>{id}</h3>
        <p>{username}</p>
        <div className='btn'> 
           <button className='delete' onClick={() => {handleDelete(id)}}>Delete</button>
        </div>
    </div>
  )
}

export default User
