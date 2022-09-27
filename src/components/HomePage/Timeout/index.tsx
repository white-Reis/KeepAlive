import { useContext, useEffect } from 'react';
import { LoginContext, SeassonProps } from '../../../context/Login';
import { ContainerText, ContainerTimeOut, ContainerTimer } from './style';

export default function Timeout() {
  const { logged, seassonTime, setSeassonTime, setLogged }: SeassonProps =
    useContext(LoginContext);

  useEffect(() => {
    if (logged) {
      setTimeout(() => setSeassonTime(seassonTime - 1), 1000);
    }
  }, [logged, seassonTime]);

  return (
    <ContainerTimeOut>
      <ContainerText>
        <p>Application refresh in</p>
      </ContainerText>
      <ContainerTimer>
        <h1>{seassonTime}</h1>
        <p>Seconds</p>
      </ContainerTimer>
    </ContainerTimeOut>
  );
}
