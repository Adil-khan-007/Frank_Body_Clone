import React  , {useState}from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import { Link  , Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {faGoogle , faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import {SetLogin} from '../../ReduxStore/Actions/mainAction'; 
import { ToastContainer, toast } from 'react-toastify';
import {toast as tt} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const logindatainital  = {
    email:"",
    password:"",
}

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [logindata,setlogindata] = useState(logindatainital);
    const [loginstatus,setloginstatus] = useState(false);
    localStorage.setItem("Login_Status",loginstatus);
    
    const logindataHandler = (e) => {
      const {name,value} = e.target;
      setlogindata({...logindata,[name]:value});
    }

        const {email,password} = logindata;
        const loginsubmitter = (e) => {
            e.preventDefault();
            SetLogin(dispatch,logindata,navigate);
        }

    return (
        <>
            <Navbar />

            <div className="login_div">
                <div className="inner_login_div">
                    <div>
                        <img src="https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg" alt="Not Found" />
                    </div>


                    <div className='formSide'>

                    {/* here */}

                    <div className='loginconatiner'>
        <div className='login_img'>
            <img src="https://www.frankbody.com/wp-content/themes/frank/resources/images/hotel-pink-logo.png" alt="This" />
        </div>
        <div >
            <h2 className='login_h2'>Sign in to your account</h2>
        </div>
        <form  onSubmit={loginsubmitter} className='loginform'>
        <input type="email" name="email" value={email} placeholder="Email"  onChange={logindataHandler} required/>
            <input type="password" name="password" value={password} placeholder="Password" onChange={logindataHandler} required/>
            <input type="submit" value="SIGN IN" />
        </form>
        <div className='loginlinks'>
            <Link  className='loginlinksdata firstlink'>Forgot your password? </Link>
            <Link className='loginlinksdata firstlink' to="/register">Register an account</Link>
        </div>

    </div>
{/* 
    <div className="login_with_container">

        <div className="login_btns">
            <button><FontAwesomeIcon className='google' icon={faGoogle}/> &nbsp;&nbsp;&nbsp;&nbsp;Google</button>
            <button><FontAwesomeIcon className='facebook' icon={faFacebook} />&nbsp;&nbsp;&nbsp;&nbsp;Facebook</button>
        </div>
    </div> */}

    <ToastContainer  style={{zIndex:100000000}}/>

    {/* here.. */}


    
                    </div>


                </div>
            </div>
        </>
    );
}

export default Login;