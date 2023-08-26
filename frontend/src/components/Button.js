import { deleteFriend } from "../utils/userApi"

function Button({friend}) {
    function onClickHandler() {
        
        deleteFriend(friend.name)
    }

    return(
        <>
            <button onClick={onClickHandler}>Supprimer</button>
        </>
    )
}
export default Button