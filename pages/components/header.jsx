import react from "react";
import Image from "next/image";
import styles from '../../styles/Header.module.css'


export default function Header (){
    
    return(
        <>



        <header className={styles.cabecalho}>
            <div className={styles.logo}>

          <img src="/images/logo.png"
          height={150}  width={200}/>

            </div>
            <nav className={styles.menu}>
                <a>|||</a>

            </nav>


        </header>


        </>





    )



}