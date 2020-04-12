import React, {Fragment} from 'react'
import './Info.sass'
import temperature from './img/Icon1.png'
import rain from './img/Icon2.png'
import wind from './img/Icon3.png'
import humidity from './img/Icon4.png'
import pressure from './img/Icon5.png'

const Info = (props) => (
    <Fragment>
        <div className='info'>
          <div className='data'>
            <img src={temperature} alt='Temperature'/>
            <span> Temperature: </span>
            <span>{props.weather.temp} &deg;C</span>
          </div>
          <div className='data'>
            <img src={humidity} alt='Humidity'/>
            <span> Humidity: </span>
            <span>{props.weather.humidity}%</span>
          </div>
          <div className='data'>
            <img src={rain} alt='Sky'/>
            <span> Sky: </span>
            <span>{props.weather.weather}</span>
          </div>
          <div className='data'>
            <img src={pressure} alt='Pressure'/>
            <span> Pressure: </span>
            <span>{props.weather.pressure} hPa</span>
          </div>
          <div className='data'>
            <img src={wind} alt='Wind'/>
            <span> Wind: </span>
            <span>{props.weather.wind} m/s</span>
          </div>
        </div>
    </Fragment>
)

export default Info