import { useForm } from "react-hook-form";
import { logInUser } from "../utils/userApi";



const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = async (data) => {
        await logInUser(data)
    }

    return (
        <>
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
                {errors?.email && <p>Invalid Email</p>}
                <label htmlFor="password">Password</label>
                <input
                    {...register('password', { 
                        required: true, 
                    })}

                    type="text"
                    id="password"
                    placeholder="password" 
                />
                {errors?.password && <p>Invalid Password</p>}

                <input type="submit" />
            </form>

        </>
    )
}
export default LogIn