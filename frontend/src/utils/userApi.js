export const postUser = async(data) => {
    const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export const logInUser = async(data) => {
    const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    
    const token = await response.json()
    localStorage.setItem("token", token.token)
}