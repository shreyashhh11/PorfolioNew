import React, {useState, useEffect} from 'react';

const Today = () =>{

    const [date, setDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState('');
    
    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const dateString = now.toDateString();
        const timeString = now.toLocaleTimeString();
        setDate(dateString);
        setCurrentTime(timeString);
      };
  
      updateTime();
      const timer = setInterval(updateTime, 1000); 
  
      return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      const fetchTemperature = async () => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=28.7041&lon=77.1025&appid=${apiKey}&units=metric`; 
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
          if (data) { 
            setTemperature(data.main.temp);
            setWeather(data.weather[0].description);
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 
            setIcon(iconUrl);
          } else {
            setTemperature('No data found');
            setWeather('No data found')
          }
        } catch (error) {
          console.error('Error fetching the temperature data:', error);
        }
      };
  
      fetchTemperature();
    }, []);

    return(
        <>
        <div className="Gcard drop-shadow-md relative text-start dark:bg-coffee flex rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col px-4 text-start">
              <h2 className="text-xl font-bold tracking-tight dark:text-gray-100 text-gray-800 mb-4">Today</h2>
              <p className="text-lg dark:text-gray-200 text-gray-900 pb-2">{date}</p>
              <p className="text-md dark:text-gray-200 text-gray-900 pb-2">{currentTime}</p>
              <p className="text-sm font-bold dark:text-red-300 text-gray-600 pb-2">Pune</p>
              
                <p className="text-md  text-gray-900 dark:text-gray-100 pb-2">Temperature: {temperature}°C</p>
                <div className='flex flex-row rounded bg-coffee bg-opacity-30 dark:bg-dark-about items-center '>
                  {icon && <img style={{ width: '50px', height: '50px' }} src={icon} alt="Weather icon" />} 
                  <p className="text-md text-justify dark:text-gray-200 text-gray-900 px-2">{weather}</p>
                </div>
              
            </div>
          </div>
        </>
    )
};
export default Today;