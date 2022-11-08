import './Login.css';
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const login = async () => {
        const response = await fetch('http://localhost:3000/api/v1/users/signup', {
            method: 'post',
            body: JSON.stringify({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(JSON)
        const json = await response.json()
        window.alert(json.messages)
        

        // if (json.success){
        //     navigate("/login")
        // }
    }
    return (
        <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input ref={usernameRef} type="email" name="email" placeholder="Email or Username" required="" />
                        <input ref={passwordRef} type="password" name="pswd" placeholder="Password" required="" />
                        <button>Login</button>
                    </form>
                </div>
                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input ref={usernameRef}  type="text" name="txt" placeholder="User name" required="" />
                        <input ref={emailRef} type="email" name="email" placeholder="Email" required="" />
                        <input ref={passwordRef} type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign up</button>
                    </form>
                </div>
	    </div>
    )
}
export default Login;