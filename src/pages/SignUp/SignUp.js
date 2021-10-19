
import './SignUp.css'


import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAugth';
import { displayName } from 'firebase/auth';

const SignUp = () => {
    const {handelEmail,handelSignUp,user,handelPassword,signUp,handelName}=useAuth();
    console.log(user);
    
 
    return (
        < >
        <form onSubmit={handelSignUp}>
        <div className="p-4 signUp container pt-5 w-100 text-center mx-auto input">
            <input onBlur={handelName} className="py-2 my-2" type="text" placeholder="Name"/><br />
            <input onBlur={handelEmail} className="py-2 my-2" type="email" placeholder="Enter email"/><br />
            <input onBlur={handelPassword} className="py-2 my-2" type="password" placeholder="Password"/><br />
           
          
           
           <input onClick={signUp}  className="py-2 my-2 px-5" type="submit" value="submit" />
           
           <br />
           
          
            <Link  class="btn btn-danger" style={{textAlign:'center',color:'white',fontWeight:"bolder",textDecoration:"none"}} to="/login"><>All ready have an account</></Link>
            <h6>Email:{user.email}</h6>
        </div>
        </form>
  

     
        </>
    );
};

export default SignUp;