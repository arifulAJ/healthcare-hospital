import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitializationAuthn=()=>{
    return initializeApp(firebaseConfig);
}
export default InitializationAuthn;