import { useForm } from "react-hook-form";
import { logInUser } from "../utils/userApi";



const LogIn = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        await logInUser(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
            {...register('email', {required : true})}
            type="text"
            id="email"
            placeholder="email"
             />
            <label htmlFor="name">Password</label>
            <input 
            {...register('password', {required: true})}
            type="text"
            id="password"
            placeholder="password" />

            <input type="submit"/>
        </form>
        
        </>
    )
}
export default LogIn