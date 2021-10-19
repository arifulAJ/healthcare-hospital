import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut ,onAuthStateChanged ,updateProfile,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,GithubAuthProvider     } from "firebase/auth";
import InitializationAuthn from "./Firebase.init";

InitializationAuthn();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// const githubProvider = new GithubAuthProvider();


const useFireBase=( )=>{
    const [user,setUser]=useState({})

  
    const auth = getAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
   
   

    const handelName=e=>{
        setName(e.target.value);

    }
   
    const handelPassword=e=>{
        setPassword(e.target.value);

    }
   
    const handelEmail=e=>{
        setEmail(e.target.value)
    }
     const handelSignUp=e=>{
         e.preventDefault();
         setUser(email,password);
         setUpdateName();
       
     }
     const setUpdateName=()=>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
       console.log(error);
      });
     }
     const handelLogIn=e=>{
         e.preventDefault();
         setUser(email,password)
       
     }

    const signUp=()=>{
        createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
          setUser(result.user)
       
      })
     
    }
    const signOUt=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
          
             
              setUser(user)
              
            }
           
          });
          return ()=>unsubscribe;

    },[]);
    const LogIn=()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
  
    // const user = userCredential.user;
    setUser(result.user)
   
  })

    }

    const signinWithGoogle=()=>{
      signInWithPopup(auth, googleProvider) 
      .then(result=>{
        setUser(result.user)
        console.log(result.user);

      })
    }
    const signInWithFacebook=()=>{
      signInWithPopup(auth, facebookProvider)
      .then(result=>{
        const {displayName}=result.user;
        const logged ={
          name:displayName
        }
        setUser(logged)
        console.log(result.user);

      })
    }
    

    return{
        user,
        
        signUp,
        signOUt,
        handelName,
     handelPassword,
     handelSignUp,
     handelEmail,
    LogIn,
    handelLogIn,
    signinWithGoogle,
    signInWithFacebook,
    


    name,email


    }
}
export default useFireBase;