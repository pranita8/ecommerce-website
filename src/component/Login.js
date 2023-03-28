import './Login.css';
const Login = () => {

    return (
        <div className='main_container'>
          <h1>Sign In</h1> 
          <form method='post'>
            <div className="textfield">
                <input type="text" required/>
                <span></span>
                <label>UserName</label>     
            </div>

            <div className="textfield">
                <input type="password" required/>
                <span></span>
                <label>PassWord</label>     
            </div>

            <div className="forgetpass">
                Forget Password
            </div>

            <input  className =" login"type="submit" value="Sign In" />
            <div className="signuplink">
                Not a member?<a href='#'>SignUp</a>
            </div>
          </form>
        </div>
    );
}
export default Login;