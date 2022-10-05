import * as Styled from './style';
import Logo from '../../assets/Images/HomeLogoCompasso.svg';
import ImageCompasso from '../../assets/Images/bolao.svg';
import { LoginContext, SeassonProps } from '../../context/Login';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timeout from '../../components/HomePage/Timeout';
import Clock from '../../components/HomePage/Clock';
import { Climate } from '../../components/HomePage/Climate';

export default function Home() {
  const History = useNavigate();

  const { logged, setLogged, seassonTime, setSeassonTime }: SeassonProps =
    useContext(LoginContext);

  useEffect(() => {
    if (!logged || seassonTime === 0) {
      History('/');
    }
  }, [logged, seassonTime, setSeassonTime]);
  return (
    <Styled.HomeContainer>
      <Styled.Header>
        <Styled.HomeLogo src={Logo} />
        <Clock />
        <Climate />
      </Styled.Header>
      <div>
        <Styled.TextContainer>
          <h2>Our mission is</h2>
          <p>Nossa missão é</p>

          <h1>to transform the world</h1>
          <p>transformar o mundo</p>
          <h1>building digital experiences</h1>
          <p>construindo experiências digitais</p>
          <h1>that enable our client’s growth</h1>
          <p>que permitam o crescimento dos nossos clientes</p>
        </Styled.TextContainer>
        <Styled.ImageCompasso src={ImageCompasso} />
      </div>
      <Styled.Footer>
        <Styled.DescriptionFooter>
          <div>
            <p>
              Essa janela do navegador é usada para manter sua sessão de
              autenticação ativa. Deixe-a aberta em segundo plano e abra uma
              nova janela para continuar a navegar.
            </p>
            <span />
          </div>
        </Styled.DescriptionFooter>
        <Styled.FooterButtonDiv>
          <Timeout />
          <Styled.FooterRightContainer>
            <Styled.ButtonsHome
              colored={true}
              onClick={() => window.open('https://www.google.com.br/')}
            >
              Continuar
              <br />
              Navegando
            </Styled.ButtonsHome>
            <Styled.ButtonsHome
              colored={false}
              onClick={() => setLogged(false)}
            >
              Logout
            </Styled.ButtonsHome>
          </Styled.FooterRightContainer>
          <Styled.ButtonsHomeMobile
            colored={true}
            onClick={() => window.open('https://www.google.com.br/')}
          >
            Continuar
            <br />
            Navegando
          </Styled.ButtonsHomeMobile>
          <Styled.ButtonsHomeMobile
            colored={false}
            onClick={() => setLogged(false)}
          >
            Logout
          </Styled.ButtonsHomeMobile>
        </Styled.FooterButtonDiv>
      </Styled.Footer>
    </Styled.HomeContainer>
  );
}
