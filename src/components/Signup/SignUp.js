import './SignUp.css';
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Login from "../Login/Login.js"

const SignUp = () => {
    const navigate = useNavigate()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const register = async () => {
        const response = await fetch('http://localhost:3000/api/v1/users/signup/', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                passwordConfirmation: passwordConfirmationRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(JSON)
        const json = await response.json()
        window.alert(json.messages)

        if (json.success){
           navigate ('/login')
        }
    }
    return (
        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />
			<div className="signup">
				<form>
					<label htmlFor='chk' aria-hidden="true">Sign up</label>
					<input type="text" ref={usernameRef} name="txt" placeholder="User name" required="" />
					<input type="email" ref={emailRef} name="email" placeholder="Email" required="" />
					<input type="password" ref={passwordRef} name="pswd" placeholder="Password" required="" />
					<input type="password" ref={passwordConfirmationRef} name="pswd" placeholder="Password Confirmation" required="" />
					<button onClick={register}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor='chk' aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email Or Username" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>
	</div>
    )
}
export default SignUp;