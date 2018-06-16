import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/googlemap';

class WeatherList extends Component {

    renderWeatherData(cityData){

        const temps= cityData.list.map(weatherdata => weatherdata.main.temp);
        const pressure=cityData.list.map(weatherdata => weatherdata.main.pressure);
        const humidity=cityData.list.map(weatherdata => weatherdata.main.humidity);
        // The below code is a ES6 syntax, 
        // which says fetch me the lon and lat values from the coord object and store them in lon and lat variables.
        const {lon,lat}=cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td><GoogleMaps lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="red" units="K" /></td>
                <td><Chart data={pressure} color="green" units="hpa" /></td>
                <td><Chart data={humidity} color="Yellow" units="%" /></td>
                </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>
                        City
                        </th>
                        <th>
                        Temperature
                        </th>
                        <th>
                        Pressure
                        </th>
                        <th>
                        Humidity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherData)}
                    </tbody>
            </table>
        );
    }
}

//state parameter can be replaced with {weather} as state contains only weather parameter. its am ES6 sysntax
function mapStateToProps({weather}){
    return { weather} // {weather} = {weather = weather} ES6 syntax
}

export default connect(mapStateToProps)(WeatherList);