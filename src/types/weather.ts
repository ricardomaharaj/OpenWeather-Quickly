export type Weather = {
  lat?: number
  lon?: number
  timezone?: string
  timezone_offset?: number
  current?: {
    dt?: number
    sunrise?: number
    sunset?: number
    temp?: number
    feels_like?: number
    pressure?: number
    humidity?: number
    dew_point?: number
    uvi?: number
    clouds?: number
    visibility?: number
    wind_speed?: number
    wind_deg?: number
    wind_gust?: number
    weather?: Array<{
      id?: number
      main?: string
      description?: string
      icon?: string
    }>
  }
  minutely?: Array<{
    dt?: number
    precipitation?: number
  }>
  hourly?: Array<{
    dt?: number
    temp?: number
    feels_like?: number
    pressure?: number
    humidity?: number
    dew_point?: number
    uvi?: number
    clouds?: number
    visibility?: number
    wind_speed?: number
    wind_deg?: number
    wind_gust?: number
    weather?: Array<{
      id?: number
      main?: string
      description?: string
      icon?: string
    }>
    pop?: number
  }>
  daily?: Array<{
    dt?: number
    sunrise?: number
    sunset?: number
    moonrise?: number
    moonset?: number
    moon_phase?: number
    temp?: {
      day?: number
      min?: number
      max?: number
      night?: number
      eve?: number
      morn?: number
    }
    feels_like?: {
      day?: number
      night?: number
      eve?: number
      morn?: number
    }
    pressure?: number
    humidity?: number
    dew_point?: number
    wind_speed?: number
    wind_deg?: number
    wind_gust?: number
    weather?: Array<{
      id?: number
      main?: string
      description?: string
      icon?: string
    }>
    clouds?: number
    pop?: number
    rain?: number
    uvi?: number
  }>
  alerts?: Array<{
    sender_name?: string
    event?: string
    start?: number
    end?: number
    description?: string
    tags?: Array<any>
  }>
}
