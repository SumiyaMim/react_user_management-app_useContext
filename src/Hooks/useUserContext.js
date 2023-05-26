import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

// Custom Hooks
// It helps to use useContext

export const useUserContext = () => {
    return useContext(UserContext)
}