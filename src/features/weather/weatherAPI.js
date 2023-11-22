import axios from "../../utils/axios"

const apiKey = "31be4877227ab95849e8120ddcbac508";

export const getWeathers = async (location) => {
    const response = await axios.get(`/weather?q=${location}&appid=${apiKey}`)

    return response.data;
}