import React, { useState } from 'react'
import './Footer.scss'
import { image } from '../../constant'
import { AppWrapper, MotionWrapper } from '../../wrapper'
import { client } from '../../client'

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '' , message: ''});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { name, email, message} = formData;
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value })
	}
	const handleSubmit = () => {
		setIsLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		}
		client.create(contact)
			.then(() => {
				setIsLoading(false);
				setIsFormSubmitted(true);
			})
	}
	
	return (
	<>
		<h2 className='head-text'>Take a coffee & chat with me </h2>
		<div className='app__footer-cards'>
			<div className='app__footer-card'>
				<img src={image.email} alt='e-mail'/>
				<a href="mailto:rayhanfaraz@gmail.com" className='p-text'>rayhanfaraz@gmail.com</a>
			</div>
			<div className='app__footer-card'>
				<img src={image.mobile} alt='mobile'/>
				<a href="tel:73033333" className='p-text'>7204048170</a>
			</div>
		</div>


		{!isFormSubmitted ?  

			<div className='app__footer-form app__flex'>
				<div className='app__flex'>
					<input className='p-text' type="text" placeholder="Your Name " name="name" value={name} onChange={handleChange} />
				</div>
				<div>
					<input className='p-text' type="email" placeholder="Your E-mail" name='email' value={email} onChange={handleChange} />
				</div> 
				<div>
					<textarea className='p-text' placeholder="Your Message" name="message" value={message} onChange={handleChange} />
				</div>
				<button type='button' className='p-text' onClick={handleSubmit} >{isLoading ? 'Sending' : 'Send Message' }</button>
			</div>
			: <div>
				<h3 className='head-text'>Thank you for getting in touch !</h3>
			</div>
		}
	</>
	)
}
export default AppWrapper(MotionWrapper(Footer, 'app__footer'), 'contact','app__whitebg')