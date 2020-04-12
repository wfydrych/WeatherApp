import React, {Fragment} from 'react'
import './Header.sass'

const Header = () => (
    <Fragment>
    <div className='logo'></div>
    <div className='main-text'>
      <span className='title'>Weather forecast</span>
      <span className='subtitle'>For all places around the world. Updated 4 times a day</span>
    </div>
    </Fragment>
)

export default Header