import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../wrapper'
import { urlFor, client } from '../../client' 
import './About.scss'

const About = () => {
	const [about, setAbout] = useState([]);

	useEffect(() => {
		const query = '*[_type == "about"]';

		client.fetch(query) 
			.then((data) => setAbout(data))
	}, []);
	return (
	<>
		<h2 className='head-text'>
			I Know that 
			<span> Good Design</span>
			<br/>
			means 
			<span> Good Business</span>
		</h2> 
		<div className='app__profile'>
			{about.map((about, index) => (
				<motion.div 
					whileInView={{opacity: 1 }}
					whileHover={{scale: 1.1 }}
					transition={{duration: 0.5, type: 'tween' }}
					className='app__profile-item'
					key={about.title + index}
				>
					<img src={urlFor(about.imgUrl)} alt={about.title} />
					<h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
					<p className='p-text' style={{marginTop: 10}}>{about.description}</p>
				</motion.div>
			))}
		</div>

	</>
	)
}

export default AppWrapper(MotionWrapper(About, 'app__about'), 'about', "app__primarybg");