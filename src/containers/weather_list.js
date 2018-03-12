import React,{Component} from 'react';
import {connect} from 'react-redux';
import ChartBar from '../components/chartbar'
// import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData){
    //temperature is an array
    const temperature = cityData.list.map(weather => weather.main.temp - 273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const name = cityData.city.name;
    const humidity = cityData.list.map(weather => weather.main.humidity);
    // const {lon,lat} = cityData.city.coord;


    const dataTemp = [
            {
                color: "steelblue",
                points: [{x: 1, y: temperature[0]}, {x: 2, y: temperature[1]}, {x: 3, y:temperature[2] },{x: 4, y:temperature[3] },{x: 5, y:temperature[4] }]
            }
    ];
    const dataPress = [
            {
                color: "yellow",
                points: [{x: 1, y: pressure[0]}, {x: 2, y: pressure[1]}, {x: 3, y:pressure[2] },{x: 4, y:pressure[3] },{x: 5, y:pressure[4] }]
            }
    ];
    const dataHum = [
            {
                color: "red",
                points: [{x: 1, y: humidity[0]}, {x: 2, y: humidity[1]}, {x: 3, y:humidity[2] },{x: 4, y:humidity[3] },{x: 5, y:humidity[4] }]
            }
    ];

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <ChartBar id={`${name}1`} data={dataTemp} yLabel="temperature" units="C" />
        </td>
        <td>
          <ChartBar id={`${name}2`} data={dataPress} yLabel="pressure" units="hPa "/>
        </td>
        <td>
          <ChartBar id={`${name}3`} data={dataHum} yLabel="humidity" units="%" />
        </td>
      </tr>
    );
  }
  render(){
    return (
      <table className="table table-hover">
      <thead>
          <tr>
            <th>City</th>
            <th>Temperature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map((this.renderWeather))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);
