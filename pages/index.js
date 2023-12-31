import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
	// Set your target date and time for the treasure hunt
	// const targetDate = new Date('2023-10-09T19:00:00').getTime();
	// const [countdown, setCountdown] = useState('');
	// const [startButtonDisabled, setStartButtonDisabled] = useState(true); // Initialize as disabled

	return (
		<div className='container' style={{height: '90vh', display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<img src="recurse logo white.png" alt="Recurse Logo White" />
			<h1 className='title'>Online Treasure Hunt</h1>
			<p>The hunt has already started</p>
			<p>Use only <b>Laptop</b>, or you will see something else.</p>
			<div style={{margin: '40px 0'}}>
				<Link className='button' href={"https://recurse-navraas.vercel.app/"}>Go to Hunt Page</Link>
			</div>
		</div>
	);
};

export default HomePage;
