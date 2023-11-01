import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lonny's Social Space</h3>
            <span className="loginDesc">
                Welcome! Login, take a load off!
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="email" className="loginInput" />
                <input type="password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password</span>
                <button className="signupButton">Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  )
}
