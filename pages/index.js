import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className='container'>
			<img src="recurse logo white.png" alt="Recurse Logo White" />
			<h1 className='title'>Recurse Official</h1>
			<div className='countdown'>
				<p>{countdown}</p>
			</div>
			<p>
				Something is comming up!!
			</p>
		</div>
	)
}
