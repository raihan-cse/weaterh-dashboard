import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../../features/forecast/forecastSlice';

import './Forecast.css'
import Loading from '../ui/loader/Loading';

function Forecast() {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.search)

    const { isLoading, isError, forecast } = useSelector(state => state.forecast)

    useEffect(() => {

        dispatch(fetchForecast(search === '' ? 'Uttara' : search))

    }, [dispatch, search])

    return (
        <div className='common_layout five_forecast'>
            {(isLoading || isError) &&
                <Loading />
            }

            {!isLoading && !isError && forecast?.length > 0 &&
                <>
                    <h3 className='title'>5 day forecast</h3>
                    <div className='forecast_content'>
                        {forecast?.map(item => (
                            <div className='item' key={item?.dt_txt}>
                                <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt="icon" />
                                <p>{new Date(item?.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })} / {item?.weather[0]?.main}</p>
                                <p>{item?.main?.temp_min} / <span> {item?.main?.temp_max}</span></p>
                            </div>
                        ))}

                    </div>
                </>
            }
        </div>
    )
}

export default Forecast
