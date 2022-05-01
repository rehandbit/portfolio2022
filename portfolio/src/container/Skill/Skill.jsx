import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import ReactTooltip from 'react-tooltip';
import './Skill.scss'
import { AppWrapper } from '../../wrapper';

const Skill = () => {
	const [experience, setExperience] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experience"]';
		const skillQuery ='*[_type == "skill"]';
		client.fetch(query)
			.then((data) => {
				console.log(data)
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
				{skills?.map((skill) => (
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
			<motion.div className='app__skills-exp'>
				{experience?.map((experience) => (
					<motion.div className='app__skills-exp-item' key={experience.year}>
						<div className='app__skills-exp-year'>
							<p className='bold-text'>{experience.year}</p>
						</div>
						<motion.div className='app__skills-exp-works'>
							{experience?.work?.map((work) => (
								<>
									<motion.div 
										className='app__skills-exp-work'
										whileInView={{opacity: [0,1]}}
										transition={{duration: 0.5}}
										data-tip
										data-for={work.name}
										key={work.name}
									>
									<h4 className='bold-text'>{work.name}</h4>
									<p className='p-text'>{work.company}</p>
									</motion.div>
									<ReactTooltip
										id={work.name}
										effect="solid"
										arrowColor="#ffff"
										className="skills-tooltip"
									> 
										{work.desc}
									</ReactTooltip>
								</>
							))}
						</motion.div>
					</motion.div>
					))}
			</motion.div>
		</div>
	</>
	)
}
export default AppWrapper(Skill, Skill);