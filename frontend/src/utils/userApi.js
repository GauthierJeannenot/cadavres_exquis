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