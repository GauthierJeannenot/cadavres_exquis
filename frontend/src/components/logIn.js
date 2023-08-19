import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { logInUser, isUserAuth } from "../utils/userApi";
import { useEffect } from "react";
import NavBar from "./NavBar";



const LogIn = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = async (data) => {
        await logInUser(data)
        isUserAuth().then(data => data.isUserAuth ? navigate('/') : null)
    }

    useEffect(() => {
        isUserAuth().then(data => data.isUserAuth ? navigate('/') : null)

    }, [navigate])

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input
                    {...register('email', {
                        required: true
                    })}

                    type="text"
                    id="email"
                    placeholder="email"
                />

                <label htmlFor="password">Password</label>
                <input
                    {...register('password', {
                        required: true,
                    })}

                    type="password"
                    id="password"
                    placeholder="password"
                />


                <input type="submit" />
            </form>

        </>
    )
}
export default LogIn