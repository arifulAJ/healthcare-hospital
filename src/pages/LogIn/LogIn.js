import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAugth';



const LogIn = () => {
   
    const {LogIn,handelEmail,handelPassword ,handelLogIn,user,users,signinWithGoogle,signInWithFacebook,githubSignin,signOUt}=useAuth();
    console.log(user);
    return (
      
             <>
        <div className=" signUp p-4 signUp container pt-5 w-100 text-center mx-auto input row row-cols-lg-2 ">
         
       
       
        <div>
    
        <button onClick={signinWithGoogle} type="button" class="btn btn-danger my-2">singIn with google</button><br />
        <button onClick={signInWithFacebook} type="button" class="btn btn-danger my-2">singIn with facebook</button><br />
       
        <button onClick={signOUt} type="button" class="btn btn-danger my-2">Log Out</button>
        </div>
        <form onSubmit={handelLogIn}>
           <input onBlur={handelEmail} className="py-2 my-2" type="email" placeholder="Enter email"/><br />
            <input onBlur={handelPassword} className="py-2 my-2" type="password" placeholder="Password"/><br />
           
            <input onClick={LogIn} className="py-2 my-2 px-5" type="submit" value="submit" /><br />
            <Link  class="btn btn-danger" style={{textAlign:'center',color:'white',fontWeight:"bolder",textDecoration:"none"}} to="/signup"> <>if you didn't have account</></Link><br />
           </form>
           <h6>you name :{user.displayName}</h6>
        </div>
</>
    );
};

export default LogIn;