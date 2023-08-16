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
                        required: true, pattern:
                        {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format"
                        }
                    })}

                    type="text"
                    id="email"
                    placeholder="email"
                />
                {errors?.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Password</label>
                <input
                    {...register('password', { 
                        required: true, pattern: 
                        {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/, 
                            message: "Must be at least 12 characters long, and a combination of uppercase letters, lowercase letters, numbers, and symbols" 
                        } 
                    })}

                    type="text"
                    id="password"
                    placeholder="password" 
                />
                {errors?.password && <p>{errors.password.message}</p>}

                <input type="submit" />
            </form>

        </>
    )
}
export default LogIn