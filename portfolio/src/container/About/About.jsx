import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'

const about = [
	{ title: 'Web Developer', description: 'I am good Web developer', imgUrl: '' },
	{ title: 'Web Dedign', description: 'I am good Web developer', imgUrl: '' },
	{ title: 'UI/UX', description: 'I am good Web developer', imgUrl: '' },
	{ title: 'Web Animation', description: 'I am good Web developer', imgUrl: '' },
]

const About = () => {
	return (
	<>
		<h2 className='head-text'>
			I Know that 
			<span> Good Design</span>
			<br/>
			means 
			<span>Good Business</span>
		</h2> 
		<div className='app__profile'>
			{about.map((about, index) => (
				<motion.div 
					whielInView={{opacity: 1 }}
					whileHover={{scale: 1.1 }}
					transition={{duration: 0.5, type: 'tween' }}
					className='app__profile-item'
					key={about.title + index}
				>
					<img src={about.imgUrl} alt={about.title} />
					<h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
					<p className='p-text' style={{marginTop: 10}}>{about.description}</p>
				</motion.div>
			))}
		</div>

	</>
	)
}
export default About