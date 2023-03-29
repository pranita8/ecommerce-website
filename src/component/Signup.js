import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import InputControl from './InputControl';

const Signup = () => {
  const navigate = useNavigate();
  //setting values name ,email, password
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  console.log(values);
  const [errorMsg, setErrorMsg] = useState("");
//preventin to creating always state by disabling button
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = ()=> {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      toast(errorMsg);
      return;
    }setErrorMsg("");

    setSubmitButtonDisabled(true);
    //creating account  (it returning promise)
     createUserWithEmailAndPassword( auth,values.email, values.pass)
      
      .then(async(res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
         updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      }) 
      .catch((err) => {
      
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        toast(err.message);
        
  });
  };

 
  // const toastifyNotification = () => {
  //   toast.success(errorMsg, {
  //     position: "bottom-right"
  //   })
  // }

  return (
    <div className='main_container'>
      <h1>Sign UP</h1>
      {/* <form> */}

        {/* onchange of input field we are setting values  */}
        <InputControl
          label="Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
    {/* //  ...prev is used to store previous data if we are not using it then condition at the handlesubmit will true and show error msg */}
        <InputControl
          label="Email"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <InputControl
          label="Password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
          {/* {toast.success({errorMsg})} */}
          {/* <b>{errorMsg}</b> */}
        <button className="signup" onClick={handleSubmission} disabled={submitButtonDisabled}>
          Signup
        </button>

        <div className="signuplink">
          Already have an account ?__
          <Link to='/login' className="sign">signin</Link>
        </div>
      {/* </form> */}
      <ToastContainer />
    </div>
  );
}
export default Signup;