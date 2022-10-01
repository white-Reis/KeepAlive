import React, { FormEvent } from 'react';
import { Email } from '../../common/helper/Regex';
import * as Styled from './style';
import Logo from '../../assets/Images/Logo.svg';
import Input from '../../components/LoingPage/Input';
import Button from '../../components/LoingPage/Button';
import { useContext } from 'react';
import { LoginContext } from '../../context/Login';
import { SeassonProps } from '../../context/Login';
import { useNavigate } from 'react-router-dom';

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
  }: SeassonProps = useContext(LoginContext);

  const History = useNavigate();

  function sendSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Email.test(email) && password.length > 5) {
      setLogged(true);
      setValid(true);
      setEmail('');
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
        </Styled.InputsContainer>
      </Styled.LoginContainer>
      <Styled.ImageContainer>
        <img src={Logo} alt="compasso.uol" />
      </Styled.ImageContainer>
    </Styled.Page>
  );
}
