import React, { FormEvent } from 'react';
import * as Styled from './style';
import Logo from '../../assets/Images/Logo.svg';
import Input from '../../components/LoingPage/Input';
import Button from '../../components/LoingPage/Button';
import { useContext } from 'react';
import { LoginContext } from '../../context/Login';
import { SeassonProps } from '../../context/Login';
import { useNavigate } from 'react-router-dom';
import { RegisterContext, RegistrationProps } from '../../context/Registration';
import { User } from '../../interface/user';

export default function Login() {
  const {
    setSeassonTime,
    email,
    password,
    setEmail,
    setPassword,
    setLogged,
    valid,
    setValid,
    setSessionName,
  }: SeassonProps = useContext(LoginContext);
  const { users }: RegistrationProps = useContext(RegisterContext);

  const History = useNavigate();

  async function sendSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let logging;
    users.forEach(item => {
      if (item.email === email && item.password === password) {
        setSessionName(item.name);
        logging = true;
      }
    });
    if (logging) {
      setLogged(true);
      setValid(true);
      setEmail(email);
      setPassword('');
      setSeassonTime(600);
      History('/home');
    } else {
      setValid(false);
    }
  }

  return (
    <Styled.Page>
      <Styled.LoginContainer>
        <Styled.LogoImage src={Logo} alt="compasso.uol" />
        <Styled.DivLogin>
          <Styled.Title>Olá,</Styled.Title>
          <Styled.Text>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Styled.Text>
        </Styled.DivLogin>
        <Styled.InputsContainer>
          <h2>Login</h2>
          <Input
            required
            error={valid}
            flag={''}
            icon="user"
            text="Usuário"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            required
            error={valid}
            flag={password}
            icon="lock"
            text="Senha"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Styled.ErrorMessage Error={valid}>
            <span> Ops, usuário ou senha inválidos. Tente novamente!</span>
          </Styled.ErrorMessage>
          <Button onClick={event => sendSubmit(event)} type="submit">
            Continuar
          </Button>
          <Styled.Register>
            <p onClick={() => History('/registration')}>Criar nova Conta?</p>
          </Styled.Register>
        </Styled.InputsContainer>
      </Styled.LoginContainer>
      <Styled.ImageContainer>
        <img src={Logo} alt="compasso.uol" />
      </Styled.ImageContainer>
    </Styled.Page>
  );
}
