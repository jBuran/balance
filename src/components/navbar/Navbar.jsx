import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
export const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <ul>
            <li className={styles.title}>Мои финансы</li>
            <li>
               <Link to="/login">login</Link>
            </li>
            <li >
               <Link to="/signup">signup</Link>
            </li>
         </ul>
      </nav>
   )
}


