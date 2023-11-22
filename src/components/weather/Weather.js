import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../features/weather/weatherSlice';
import Loading from '../ui/loader/Loading';

import './Weather.css'

function Weather() {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.search)
    const { isLoading, isError, weather } = useSelector(state => state.weather)

    useEffect(() => {

        dispatch(fetchWeather(search === '' ? 'Uttara' : search))

    }, [dispatch, search])


    return (
        <div className='common_layout current_weather'>
            {(isLoading || isError) &&
                <Loading />
            }

            {!isLoading && !isError && weather != null &&
                <>
                    <div className='title_time'>
                        <h3 className='title'>current weather</h3>
                        <h3 className='title'>
                            {new Date().toLocaleTimeString().slice(0, 5)}
                            {new Date().toLocaleTimeString().slice(8, 11)}
                        </h3>
                    </div>
                    <div className='content_grid'>
                        <div className='temp_haze'>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="icon" />
                            </div>
                            <div>
                                {/* <h1>{Number(weather?.main?.temp -  295.23).toFixed(0)}</h1> */}
                                <h1>{Number(weather?.main?.temp).toFixed(0)}° <span>F</span></h1>
                                <span>{weather?.weather[0]?.main}</span>
                            </div>
                        </div>
                        <div className='other_temp'>
                            <div>
                                <p>Real Feel</p>
                                <span>{weather?.main?.feels_like}</span>
                            </div>
                            <div>
                                <p>Min Temp</p>
                                <span>{weather?.main?.temp_min}</span>
                            </div>
                            <div>
                                <p>Max Temp</p>
                                <span>{weather?.main?.temp_max}</span>
                            </div>
                        </div>
                    </div>
                    <div className='others_content'>
                        <div>
                            <h6>pressure</h6>
                            <span>{weather?.main?.pressure}</span>
                        </div>
                        <div>
                            <h6>humidity</h6>
                            <span>{weather?.main?.humidity}</span>
                        </div>
                        <div>
                            <h6>Wind</h6>
                            <span>{weather?.wind?.speed}</span>
                        </div>
                        <div>
                            <h6>visibility</h6>
                            <span>{weather?.visibility}</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Weather
