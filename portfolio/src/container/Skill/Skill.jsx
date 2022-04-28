import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import './Skill.scss'

const Skill = () => {
	const [experience, setExperience] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experience"]';
		const skillQuery ='*[_type == "skill"]'
		client.fetch(query)
			.then((data) => {
				setExperience(data);
			})
		client.fetch(skillQuery) 
			.then((data) => {
				setSkills(data);
			})
	}, []);
	
	return (
	<>
		<h2 className='head-text'>Skills & Experience</h2>
		<div className='app__skills-container'>
			<motion.div className='app__skills-list'>
				{skills.map((skill) => (
					<motion.div 
						transition={{duration: 0.5}}
						whileInView={{opacity: [0,1]}}
						className='app__skills-item app__flex'
						key={skill.name}
					>
						<div className='app__flex' style={{backgroundColor : Skill.bgColor }}>
							<img src={urlFor(skill.icon)} alt="skill.name" />
						</div>
						<p className='p-text'>{skill.name}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	</>
	)
}
export default Skill