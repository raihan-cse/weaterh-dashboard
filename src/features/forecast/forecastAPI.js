import axios from "../../utils/axios"

const apiKey = "31be4877227ab95849e8120ddcbac508";

export const getForecast = async (location) => {    
    const response = await axios.get(`/forecast?q=${location}&cnt=5&appid=${apiKey}`)

    return response.data?.list;
}