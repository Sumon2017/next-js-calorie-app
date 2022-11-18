import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginBtn from '../components/login-btn'

export default function Home() {
  return (
    <div>
		<div style = {{display:"flex",justifyContent:"flex-end"}}>
			<LoginBtn></LoginBtn>
		</div>
		<p>
			sumon
		</p>
	</div>
  )
}
