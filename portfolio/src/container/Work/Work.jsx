import React, { useState, useEffect} from 'react'
import { AiFilleye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrapper } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.scss'

const Work = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1});
	const [works, setWorks] = useState([]);
	const [filterWorks, setFilterWorks] = useState([]);

	useEffect(() => {
		const query = '*[_type == "works]'
		client.fetch(query)
			.then((data) => {
				setWorks(data);
				setActiveFilter(data);
			})

	}, []);
	const handlework = (item) => {


	}
	return (
	<>
		<h2 className='head-text'>
			My Creative 
			<span> Portfolio</span>
			<br/>
			Section
		</h2>
		<div className='app__work-filter'>
			{['React JS','Web development','UI/UX','Mobile App'].map((item, index) => (
				<div className={`app__work-filter-item app__flex p-text $(activefilter === item ? 'item-active' : '')`} key={index} onclick={() => handlework(item)} >{item}</div>
			))}
		</div>
		<motion.div 
			className='app__work-portfoliio'
			animate={animatedCard}
			transition={{ duration: 0.5, delayChildren:0.5}}
		>
{filterWorks.map((works, index) => {
	<div className='app__work-item app__flex' key={index}>
		<div className='app__work-img app__flex'>
			<img src={urlFor(works.imgUrl)} alt={works.name} />
		</div>
	</div>
})}
		</motion.div>
	</>
	)
}
export default Work