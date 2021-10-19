import { useContext } from "react"
import { AuthContext } from "../context/AughtProvider"

const useAuth=()=>{
    return useContext(AuthContext)

}
export default useAuth;