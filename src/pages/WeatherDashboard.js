import Chart from "../components/chart/Chart"
import Forecast from "../components/forecast/Forecast"
import Search from "../components/search/Search"
import Weather from "../components/weather/Weather"

import './WeatherDashboard.css'

function WeatherDashboard() {

    return (
        <main className="weather_dashboard">
            <div className="container">
                <Search />
                <div className="weather_forecast">
                    <Weather />
                    <Forecast />
                </div>
                <Chart />
            </div>
        </main>
    )
}

export default WeatherDashboard
