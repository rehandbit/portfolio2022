import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrapper, MotionWrapper } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Testimonial.scss'

const Testimonial = () => {
	const [testimonial, setTestimonial] = useState([]);
	const [brand, setBrand] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const query = '*[_type == "testimonial"]';
		const brandQuery ='*[_type == "brand"]';

		client.fetch(query)
			.then((data) => {
				setTestimonial(data);
			})

		client.fetch(brandQuery) 
			.then((data) => {
				setBrand(data);
			})
	}, []);

	return (
	<>
		{testimonial.length && (
			<>
				<div>
					<img src={urlFor(testimonial[currentIndex].imgurl)} alt="testimonial"/>
				</div>
			</>
		)}
	</>
	)
}
export default AppWrapper(MotionWrapper(Testimonial, 'app__testimonial'),'testimonial','app__primarybg');