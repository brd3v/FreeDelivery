import React from "react";
import styles from '../../styles/Login.module.css'

export default function Login(){


    return(

  <div className={styles.login}>
  <div className={styles.entrada} >

        <div className={styles.campos}>

      <input type="e-mail" /><br />
      <input type="password" />
        <br /> <br />

        <div className={styles.botao}>
        <div>
      <button>Login</button> <br></br>
      <button >Esqueceu a sua senha?</button></div>  </div>
    
</div>


     </div>
     
 
  </div>
    )
}



