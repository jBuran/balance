import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/confing";

export const useLogout = () => {
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false)

   const logout = async () => {
      setError(null)
      setIsPending(true)

      try {
         await signOut(auth)
         setIsPending(false)
         setError(null)

      } catch {
         console.log(err.message)
         setError(err.message)
         setIsPending(false)
      }
   }
}