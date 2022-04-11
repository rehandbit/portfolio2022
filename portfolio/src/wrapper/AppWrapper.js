import React from 'react'
import { NavigationDot, SocialMedia } from '../component'

const AppWrapper = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2022 Rehan</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
      <NavigationDot active={idName} />
    </div>
  )
}

export default AppWrapper