import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import { isUserAuth } from "../utils/userApi"

function Profile() {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        isUserAuth().then(data => setUserName(data.userName))
    })

    return(
        <>
        <NavBar />
        <h1>{userName}</h1>
        <form></form>
        </>
    )
}
export default Profile