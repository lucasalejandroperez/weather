import axios, { AxiosResponse } from 'axios';
import { IWeatherOneCallResponse } from '../interfaces/WeatherInterfaces';
import { ICoords } from '../stateManagement/action-types/cityActionTypes';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          "Set-Cookie": "HttpOnly;Secure;SameSite=Strict",
        },
      })
      .then(responseBody);
  },
};

const Weather = {
  getOneCall: ({ long, lat }:ICoords ): Promise<IWeatherOneCallResponse> =>
    requests.get(`/onecall?lat=${ lat }&lon=${ long }&exclude=alerts&appid=${ process.env.REACT_APP_WEATHER_APP_KEY }&units=metric`),
}

export const openWeatherApi = axios.create();

export default {
  Weather
};