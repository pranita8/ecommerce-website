import './Signup.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup= () => {

  const toastifyNotification=()=>{
    toast.success('🦄Register Successfull!!',{
        position:"bottom-right"
    })
  }
    return (
        <div className='main_container'>
          <h1>Sign UP</h1> 
          <form method='post'>
            <div className="textfield">
                <input type="email" required/>
                <span></span>
                <label>Email_id</label>     
            </div>

            <div className="textfield">
                <input type="mobile_no" required/>
                <span></span>
                <label>Mobile_Number</label>     
            </div>

            <div className="textfield">
                <input type="password" required/>
                <span></span>
                <label>Password</label>     
            </div>

            <input  onClick={toastifyNotification} className ="signup" type="submit" value="Sign_Up" />
            <div className="signuplink">
              Account already exist__
                <Link  to='/login'className="sign">signin</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
    );
}
export default Signup;