import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import Input from './Input';

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
      });

 const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
   
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      toast(errorMsg);
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        toast(err.message);
      });
  };

    return (
        <div className='main_container'>
            <h1>Sign In</h1>
         <div className='form'>
         <Input
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <Input
       <Input
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />  
                <div className="forgetpass">
                    Forget Password
                </div>
            <button className='login' disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>

                <div className="signuplink">
                    Create New Account  ?__
                    <Link className="sign" to='/signup'>signup</Link>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
}
export default Login;