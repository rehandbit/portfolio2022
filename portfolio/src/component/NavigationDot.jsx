import React from 'react'

const NavigationDot = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home','about','contact','work','skill','testimonial','contact'].map((item, index) => (
        <a href={`#{item}`} key={item + index} className='app__navigation-dot' style={active === item ? { backgroundColor: '#31BAC' }:{} } />
      ))}
    </div>
  )
}

export default NavigationDot