import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import { isUserAuth, loadFriendsList } from "../utils/userApi"
import Button from "./Button"

function Profile() {
    const [userName, setUserName] = useState('')
    const [friendsList, setFriendsList] = useState([])
    useEffect(() => {
        isUserAuth().then(data => setUserName(data.userName))
        loadFriendsList().then(data => setFriendsList(data))
    })



    return(
        <>
        <NavBar />
        <h1>{userName}</h1>
        <h3>FriendList</h3>
        {friendsList && friendsList.map(friend => <div key={friend._id} >{friend.name}<Button friend={friend} /></div>)}
        
        </>
    )
}
export default Profile