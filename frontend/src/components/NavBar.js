import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserAuth, logOutUser } from "../utils/userApi";

function NavBar() {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(null)
    const [userId, setUserId] = useState("")

    useEffect(() => {
        isUserAuth()
            .then(data => {
                data.isUserAuth ? setLoggedIn(true) : setLoggedIn(null)
                setUserId(data.userId)
            })
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


                    {loggedIn
                        ? <div>
                            <li>
                                <div onClick={logOut}>Logout</div>
                            </li>
                            <li>
                                <Link to={`/profile/${userId}`}>Profile</Link>
                            </li>
                        </div>
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