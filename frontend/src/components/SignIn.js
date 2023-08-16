import { useForm } from "react-hook-form";
import { postUser } from '../utils/userApi';


const SignInForm = () => {
    const {
        register,
        handleSubmit,
        
    } = useForm()

    const onSubmit = async (data) => {
        await postUser(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>Name</label>
            <input
                {...register("name", { required: true })}
                type='text'
                placeholder='Name ...'
                id='name' />
            
            <label htmlFor='password'>Password</label>
            <input
                {...register("password", { required: true })}
                type='text'
                placeholder='Password ...'
                id='Password' />

            <label htmlFor='email'>email</label>
            <input
                {...register("email", { required: true })}
                type='text'
                placeholder='email ...'
                id='email' />


            <input type='submit' />
        </form>
    )
}
export default SignInForm