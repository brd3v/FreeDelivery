import Head from 'next/head'
import Footer from './components/Footer'
import Header from './components/header'
import Login from './components/Login'
import style from '../styles/Aplication.module.css'

export default function Aplication() {
  return (
    <div className={style.aplication} >
     <Header />
      <Login />
    <br></br>
  <Footer />
    </div>
  )
}
