import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth, projectAuth } from "../firebase/confing"

export const useLogin = () => {
   const [isCancelled, setIsCancelled] = useState(false);
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false)

   const login = async (email, password) => {
      setError(null)
      setIsPending(true)
      try {
         await signInWithEmailAndPassword(auth, email, password)
         if (!isCancelled) {
            setIsPending(false)
            setError(null)
         }

      } catch (err) {
         if (!isCancelled) {
            setError(err.message)
            setIsPending(false)

         }
      }
   }
   useEffect(() => {
      return () => setIsCancelled(true)
   }, [])
   return { login, isPending, error }
}