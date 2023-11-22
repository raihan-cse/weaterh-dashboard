import React from 'react'
import { useSelector } from 'react-redux'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import './Chart.css'
import Loading from '../ui/loader/Loading'

function Chart() {

    const { isLoading, isError, forecast } = useSelector(state => state.forecast)

    const newArray = forecast?.map(i => ({ ...i.main, date: new Date(i.dt_txt).toLocaleDateString("en-US", { weekday: "long" }) }))

    return (
        <div className='common_layout chart'>
            {(isLoading || isError) &&
                <Loading />
            }

            {!isLoading && !isError && forecast?.length > 0 &&
                <LineChart width={1200} height={400} data={newArray} style={{ width: "100%", height: "auto" }}>
                    <CartesianGrid stroke="#ccc" />
                    <Line type="monotone" dataKey="temp_min" stroke="#ff7300" strokeWidth={2} />
                    <Line type="monotone" dataKey="temp_max" stroke="#387908" strokeWidth={2} />
                    <XAxis dataKey={`date`} />
                    <Tooltip />
                    <YAxis />
                </LineChart>
            }
        </div>
    )
}

export default Chart
