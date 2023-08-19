import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserAuth, logOutUser } from "../utils/userApi";

function NavBar() {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(null)

    useEffect(() => {
        isUserAuth().then(data => data.isUserAuth ? setLoggedIn(true) : setLoggedIn(null))
    }, [])

    const logOut = () => {
        logOutUser()
        navigate('/login')
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>

                    {loggedIn
                        ? <li>
                            <div onClick={logOut}>Logout</div>
                        </li>
                        : <div>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </div>

                    }

                </ul>
            </nav>

            <hr />



        </div>
    );
}
export default NavBar