import React  , {useState}from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import { Link  , Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {toast as tt} from 'react-toastify';
import {faGoogle , faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Registration } from '../../ReduxStore/Actions/mainAction';


const intialregisterdata = {
    email:"",
    password:"",
    fname:"",
    lname:"",
  }



function Register() {

    const navigate = useNavigate();
    const [registationdata,setregistationdata] = useState(intialregisterdata);
   const {email, password, fname, lname} = registationdata;
  
    const Handlechange = (e) => {
    const{name,value} = e.target;
    setregistationdata({...registationdata,[name]:value})
  }
  
  const Registerationhandler = (e) => {
    e.preventDefault();

    const message  = Registration(registationdata);
    message.then((res)=>{
 if(res == "Registration Succesfully"){
      tt.success('Successfully Registered', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
          setTimeout(()=>{
            navigate('/login');
          },2000)
   }
   else{
      toast.warn('User Already Exists', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
   }
    })
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

                    <div  className='registerconatiner'>

        <form onSubmit={Registerationhandler} className='registerform'>
            <h2 className='cana'>Create an account</h2>
            <input name="email" type="email" placeholder="Email" value={email} onChange={Handlechange} required/>
            <input name="password" type="password" placeholder="Password" value={password} onChange={Handlechange} required/>
            <input name="fname" type="text" placeholder="First name" value={fname} onChange={Handlechange} required/>
            <input name="lname" type="text" placeholder="Last name" value={lname} onChange={Handlechange} required/>

            <ToastContainer  style={{zIndex:100000}}/>
            <span className='maysend'>You'll be sent an email with instructions to activate your account</span>
            <input  type="submit" value="REGISTER" style={{margin : "1px 0"}}/>
        </form>
        <div className='registerlinks'>
            <Link className='registerlinksdata firstlink' to="/login">Have an account? Login</Link>
        </div>
    </div>
                    
    <ToastContainer  style={{zIndex:100000000}}/>
    

    
                    </div>


                </div>
            </div>
        </>
    );
}

export default Register;