
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
   apiKey: "AIzaSyD4Xp4qsJdCXsGIuM2Xzyn1rFB7YY0h63k",
   authDomain: "finace-c6352.firebaseapp.com",
   projectId: "finace-c6352",
   storageBucket: "finace-c6352.appspot.com",
   messagingSenderId: "527019348474",
   appId: "1:527019348474:web:3a608b0fbebbede7565443"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)