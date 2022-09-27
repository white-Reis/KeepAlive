import axios from 'axios';
import { useState, useEffect } from 'react';
import { ContainerClimate, ContentDiv } from './style';
import icon from '../../../assets/Images/Vector.svg';

export const Climate = () => {
  const [temperature, setTemperature] = useState<number>(0);
  const [city, setCity] = useState<string>('seeking out..');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a22cdd0ac2808b56c52386edfb324cfb`,
        )
        .then(response => response.data)
        .then(item => {
          const { main, name } = item;
          setCity(`${name} - SC`);
          setTemperature(Math.round(main.temp - 273.15));
        });
    });
  }, []);
  return (
    <ContainerClimate>
      <p>{city}</p>
      <ContentDiv>
        <img src={icon} alt="rain" />
        <span>{temperature}º</span>
      </ContentDiv>
    </ContainerClimate>
  );
};
