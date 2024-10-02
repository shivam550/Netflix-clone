import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAe5XGQPUfomH5boEsLn0jgBpC9mRIcUHg",
  authDomain: "free-movies-673be.firebaseapp.com",
  projectId: "free-movies-673be",
  storageBucket: "free-movies-673be.appspot.com",
  messagingSenderId: "666341727314",
  appId: "1:666341727314:web:104777193a31f97181138b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name,email,password) => {
   try{
     const res = await createUserWithEmailAndPassword(auth,email,password);
     const user = res.user
     await addDoc(collection(db,"users"),{
        uid:user.uid,
        name,
        authProvider : "local",
        email
     })

    
   }catch(error){
    console.error(error)
    const errorMessage = error.code.split('/')[1].split('-').join(" ");
    toast.error(errorMessage);
   }
};


const logIn = async(email , password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.error(error);
        const errorMessage = error.code.split('/')[1].split('-').join(" ");
        toast.error(errorMessage);
    }
};



const logOut = async() => {
    signOut(auth);
}


export {
    auth,
    db,
    logIn,
    signUp,
    logOut
}