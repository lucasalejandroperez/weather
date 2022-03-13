import { CitySelector } from "../CitySelector/CitySelector"
import { WeatherFiveDays } from "../WeatherFiveDays/WeatherFiveDays"
import { WeatherToday } from "../WeatherToday/WeatherToday"

export const Weather = () => {
  return (
    <>
        <CitySelector />

        <WeatherToday />

        <WeatherFiveDays />
    </>
  )
}
