import React, {Component} from 'react'
import './App.sass'
import Info from './Info'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  state = {
    temp: 0,
    humidity: 0,
    weather: '',
    pressure: 0,
    wind: 0,
    city: '',
  }


  handleClick = () => {
    const key = '93d786b2b5eec27fd1cc70ea491eadb3'
    const thisApp = this
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + thisApp.state.city + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      thisApp.setState({
        temp: Math.round(parseFloat(data.main.temp)-273.15),
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        pressure: data.main.pressure,
        wind: data.wind.speed,
      })
    })
    .catch(function(err) {
      //console.log(err)
    });
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render(){
    return (
      <div id='bgc'>
        <div className='main'>
          <Header></Header>
          <div className='input'>
            <input type='text' onChange={this.handleChange} value={this.state.city} placeholder='What is your city?'></input>
            <input type='button' onClick={this.handleClick} value="Check"></input>
          </div>
          <Info weather={this.state}></Info>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
