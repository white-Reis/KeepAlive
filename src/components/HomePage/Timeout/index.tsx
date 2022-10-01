import { useContext, useEffect } from 'react';
import { LoginContext, SeassonProps } from '../../../context/Login';
import { RefreshMessage, TimeOut, TimeOutTimer } from './style';

export default function Timeout() {
  const { logged, seassonTime, setSeassonTime, setLogged }: SeassonProps =
    useContext(LoginContext);

  useEffect(() => {
    if (logged) {
      setTimeout(() => setSeassonTime(seassonTime - 1), 1000);
    }
  }, [logged, seassonTime]);

  return (
    <TimeOut>
      <RefreshMessage>
        <p>Application refresh in</p>
      </RefreshMessage>
      <TimeOutTimer>
        <h1>{seassonTime}</h1>
        <p>Seconds</p>
      </TimeOutTimer>
    </TimeOut>
  );
}
