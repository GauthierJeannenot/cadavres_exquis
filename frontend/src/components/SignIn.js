import { useForm } from "react-hook-form";
import { postUser } from '../utils/userApi';
import NavBar from "./NavBar";


const Register = () => {
    const {
        register,
        handleSubmit,

    } = useForm()

    const onSubmit = async (data) => {
        try {
            await postUser(data)
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <>
            <NavBar />
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
                    type='password'
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
        </>

    )
}
export default Register