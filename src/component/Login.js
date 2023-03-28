import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
const Login = () => {

    const toastifyNotification=()=>{
        toast.success('🦄Login Successfull!!',{
            position:"bottom-right"
        })
    }
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

            <button onClick={toastifyNotification} className='login'>Sign-in</button>
           
            <div className="signuplink">
               Create New Account __ 
                <Link className="sign"to='/signup'>signup</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
    );
}
export default Login;