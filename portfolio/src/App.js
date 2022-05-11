import React from 'react';
import './App.css';
import './App.scss';
import { About, Footer, Header, Skill, Work } from './container';
import { Navbar } from './component';

const App = () => {
	return(
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Skill />
			<Work />
			{/* <Testimonial /> */}
			<Footer />
		
		</div>
	);
}

export default App;
