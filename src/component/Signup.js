import './Signup.css';
const Signup= () => {

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

            <input  className ="signup"type="submit" value="Sign_Up" />
          </form>
        </div>
    );
}
export default Signup;