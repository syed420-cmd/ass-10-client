import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA_Wq2uGc0IzCSRaYshl5YrxfDUVPORJUU",
  authDomain: "assignment10-craft.firebaseapp.com",
  projectId: "assignment10-craft",
  storageBucket: "assignment10-craft.appspot.com",
  messagingSenderId: "494888493480",
  appId: "1:494888493480:web:a7690b3c2fb4ce72187d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);
export const storage = getStorage(app);
export default Auth;
