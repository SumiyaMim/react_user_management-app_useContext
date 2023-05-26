import React, {useContext, useState} from 'react'
import './style.css'
import { UserContext } from './Context/UserContext'
import { useUserContext } from './Hooks/useUserContext'

const NewUser = () => {

    const [username, setUsername] = useState("")
    const {setUsers} = useUserContext() // Custom hook - helps to use useContext
    // const {setUsers} = useContext(UserContext)

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {id: new Date().getTime().toString(), username: username}
        // handleAddUser(newUser)
        setUsers(prevUsers => [...prevUsers, newUser])
        setUsername("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form_input'>
        <h4>User Registration</h4>
        <input type='text' name='username' value={username} onChange={handleUsername} required/>
        <button className='add'>Add User</button>
      </form>
    </div>
  )
}

export default NewUser
