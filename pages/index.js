import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
	// Set your target date and time for the treasure hunt
	const targetDate = new Date('2023-10-09T19:00:00').getTime();
	const [countdown, setCountdown] = useState('');
	const [startButtonDisabled, setStartButtonDisabled] = useState(true); // Initialize as disabled

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const timeLeft = targetDate - now;

			if (timeLeft <= 0) {
				setCountdown('Treasure Hunt has started!');
				setStartButtonDisabled(false); // Enable the button when the timer reaches zero
				clearInterval(interval);
			} else {
				const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

				setCountdown(`${hours}h ${minutes}m ${seconds}s`);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='container' style={{height: '90vh', display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<img src="recurse logo white.png" alt="Recurse Logo White" />
			<h1 className='title'>Online Treasure Hunt</h1>
			<div className='countdown'>
				<p>The Hunt begins in: {countdown}</p>
				<p>The hunt starts at 7:00 pm today</p>
			</div>
			<Link href={"https://recurse-navraas.vercel.app/"}>Main Site</Link>
		</div>
	);
};

export default HomePage;
