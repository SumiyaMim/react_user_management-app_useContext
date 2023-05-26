import React, {useState} from "react"
import Users from "./Users";
import './style.css'
import NewUser from "./NewUser";
import UsersProvider, { UserContext } from "./Context/UserContext";

// User Management App using Context API
// CRD - Create, Read, Delete user

function App() {

  // const [users, setUsers] = useState([
  //   {id: 1, username:"Priya Hossain"},
  //   {id: 2, username:"Sumiya Islam"},
  //   {id: 3, username:"Rina Sultana"},
  //   {id: 4, username:"Shirin Sultana"}
  // ])

  // const handleDeleteUser = (id) => {
  //   const filteredUsers = users.filter(user => user.id !== id)
  //   setUsers(filteredUsers)
  // }

  // const handleAddUser = (newUser) => {
  //   setUsers(prevUsers => [...prevUsers, newUser])
  // }

  return (
  //  <UserContext.Provider value={{users, setUsers}}>
  //       <div>
  //         <h2>User Management App</h2>
  //         {/* <NewUser handleAddUser = {handleAddUser}/> */}
  //         <NewUser/>
  //         {/* <Users handleDeleteUser = {handleDeleteUser}/> */}
  //         <Users/>
  //       </div>
  //  </UserContext.Provider>
  <UsersProvider>
  <div>
    <h2>User Management App</h2>
    {/* <NewUser handleAddUser = {handleAddUser}/> */}
    <NewUser/>
    {/* <Users handleDeleteUser = {handleDeleteUser}/> */}
    <Users/>
  </div>
 </UsersProvider>
  );
}

export default App;

// Context
// Create Context
// Provide the Context
// Use the Context