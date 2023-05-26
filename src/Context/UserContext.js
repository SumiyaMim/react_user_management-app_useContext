import React, { createContext, useState } from "react";

export const UserContext = createContext({})

const UsersProvider = ({children}) => {

    const [users, setUsers] = useState([
        {id: 1, username:"Priya Hossain"},
        {id: 2, username:"Sumiya Islam"},
        {id: 3, username:"Rina Sultana"},
        {id: 4, username:"Shirin Sultana"}
    ])

    return <UserContext.Provider value={{users, setUsers}}>
        {children}
    </UserContext.Provider>
}

export default UsersProvider