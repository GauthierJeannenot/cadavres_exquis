export const postUser = async (data) => {
    try {
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return response.json()

    } catch (error) {
        console.error(error)
    }

}

export const logInUser = async (data) => {
    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        
        const jsonResponse = await response.json()
        if (jsonResponse.message !== "Success") {
            window.alert(jsonResponse.message)
        }
        
        localStorage.setItem("token", jsonResponse.token)
    } catch (error) {
        console.log(error)
    }

}

export const logOutUser = () => {
    localStorage.removeItem("token")
}

export const isUserAuth = async () =>{
    try {
        const response = await fetch('/api/users/isUserAuth', {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        const data = await response.json()
        
        return data

    } catch (error) {
        console.log(error)
    }
    
}

export const loadFriendsList = async() => {
    try {
        const response = await fetch('/api/users/showFriends', {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        const friendsList = await response.json()
        return friendsList
        
    } catch (error) {
        console.error(error)
    }
}

export async function deleteFriend(data) {
    try {
        const response = await fetch('/api/users/deleteFriend', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token")
            },
            body: JSON.stringify({targetName: data})
        })
        const jsonResponse = await response.json()
        return jsonResponse
        
    } catch (error) {
        console.error(error)
    }


}