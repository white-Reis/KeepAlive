import { useContext, useEffect, useState } from 'react';
import { Cloak } from './style';

enum Month {
  'janeiro' = 0,
  'fevereiro' = 1,
  'março' = 2,
  'abril' = 3,
  'maio' = 4,
  'junho' = 5,
  'julho' = 6,
  'agosto' = 7,
  'setembro' = 8,
  'outubro' = 9,
  'novembro' = 10,
  'dezembro' = 1,
}
enum weekday {
  'domingo' = 0,
  'segunda-feira' = 1,
  'terça-feira' = 2,
  'quarta-feira' = 3,
  'quinta-feira' = 4,
  'sexta-feira' = 5,
  'sabado' = 6,
}

export default function Clock() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(refresh, 1000);
  }, []);

  function refresh() {
    let newDate = new Date();
    setDate(newDate);
  }

  const minutes = String(date.getMinutes()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <Cloak>
      <div>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
      </div>
      <p>
        {weekday[weekDay]},{day} de {Month[month]} de {year}
      </p>
    </Cloak>
  );
}
