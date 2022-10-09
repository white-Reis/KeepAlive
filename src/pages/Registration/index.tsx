import * as Styled from './style';
import * as Regex from '../../common/helper/Regex';
import { HiOutlineLockClosed, HiOutlineLockOpen } from 'react-icons/hi';
import Logo from '../../assets/Images/Logo.svg';
import Input from '../../components/LoingPage/Input';
import Button from '../../components/LoingPage/Button';
import { RegisterContext, RegistrationProps } from '../../context/Registration';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { userColletionRef } from '../../service/firebaseConfig';
import { TimeOut } from '../../components/HomePage/Timeout/style';

export default function Registration() {
  const History = useNavigate();

  const {
    completeName,
    email,
    password,
    setCompleteName,
    setEmail,
    setPassword,
    validName,
    setValidName,
    validEmail,
    setValidEmail,
    validPassword,
    setValidPassword,
    passwordConfirm,
    setPasswordConfirm,
    validPasswordConfirm,
    setValidPasswordConfirm,
    users,
    members,
    setMembers,
  }: RegistrationProps = useContext(RegisterContext);

  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const [passwordConfirmFocused, setPasswordConfirmFocused] =
    useState<boolean>(false);
  const [textHide, setTextHide] = useState<boolean>(false);
  const [passwordHide, setPasswordHide] = useState<boolean>(false);
  const [passwordConfirmHide, setPasswordConfirmHide] =
    useState<boolean>(false);
  const [avaliableEmail, setAvaliableEmail] = useState<boolean>(true);
  const [registered, setRegistered] = useState<boolean>(true);

  useEffect(() => {
    if (Regex.Name.test(completeName)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
    if (Regex.Email.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    if (Regex.password.test(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    if (passwordConfirm === password && validPassword) {
      setValidPasswordConfirm(true);
    } else {
      setValidPasswordConfirm(false);
    }
  }, [
    validPassword,
    completeName,
    email,
    password,
    passwordConfirm,
    setValidName,
    setValidEmail,
    setValidPassword,
    setValidPasswordConfirm,
  ]);
  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRegistered(true);
    const availability = !users.some(item => item.email === email);
    if (
      validEmail &&
      validName &&
      validPassword &&
      validPasswordConfirm &&
      availability
    ) {
      const user = await addDoc(userColletionRef, {
        email: email,
        name: completeName,
        password: password,
      });
      setMembers(members + 1);
      setRegistered(false);
      setCompleteName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setTimeout(() => History('/'), 3000);
    }
    if (availability) {
      setAvaliableEmail(true);
    } else {
      setAvaliableEmail(false);
    }
  }
  return (
    <Styled.Page>
      <Styled.LoginContainer>
        <Styled.LogoImage src={Logo} alt="compasso.uol" />
        <Styled.InputsContainer>
          <Styled.TextArea>
            <h1>Cadastro</h1>
            <p>Crie sua conta para se conectar na rede.</p>
          </Styled.TextArea>
          <label htmlFor="'completeName">Nome completo</label>
          <Input
            value={completeName}
            type="text"
            id="completeName_Input"
            text={'Nome completo'}
            icon={'user'}
            error={validName}
            flag=""
            onChange={event => setCompleteName(event.target.value)}
            required
          />
          <label htmlFor="email_Input">E-mail</label>
          <Input
            value={email}
            type="email@compass.com.br"
            id="email_Input"
            text={'E-mail'}
            icon={'card'}
            error={validEmail}
            flag=""
            onChange={event => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password_Input">Senha</label>
          <Styled.ContainerInput
            visible={passwordHide}
            Error={validPassword}
            flag={password}
          >
            <input
              placeholder="Senha"
              value={password}
              type={passwordHide ? 'text' : 'password'}
              id="password_Input"
              onChange={event => setPassword(event.target.value)}
              onFocus={() => {
                setPasswordFocused(true), setTextHide(true);
              }}
              onBlur={event => {
                if (event.target.value.length > 0) {
                  setPasswordFocused(true);
                } else {
                  setPasswordFocused(false);
                }
                setTextHide(!textHide);
              }}
              required
            />
            <Styled.Icon
              onClick={() => {
                setPasswordHide(!passwordHide);
              }}
              focused={passwordFocused}
            >
              {passwordHide ? (
                <HiOutlineLockOpen size={20} />
              ) : (
                <HiOutlineLockClosed size={20} />
              )}
            </Styled.Icon>
          </Styled.ContainerInput>
          <Styled.PasswordMessage focused={textHide}>
            <Styled.PasswordSpan correct={password.length > 7}>
              Mínimo de oito dígitos*
            </Styled.PasswordSpan>
            <br />
            <Styled.PasswordSpan correct={Regex.uppercase.test(password)}>
              Letra maiúscula*
            </Styled.PasswordSpan>
            <br />
            <Styled.PasswordSpan correct={Regex.lowcase.test(password)}>
              Letra minúscula*
            </Styled.PasswordSpan>
            <br />
            <Styled.PasswordSpan correct={Regex.Number.test(password)}>
              Número*
            </Styled.PasswordSpan>
            <br />
            <Styled.PasswordSpan correct={Regex.Special.test(password)}>
              Caractere especial*
            </Styled.PasswordSpan>
          </Styled.PasswordMessage>
          <label htmlFor="passwordConfirm_Input">Confirmar senha</label>
          <Styled.ContainerInput
            visible={passwordConfirmHide}
            Error={validPasswordConfirm}
            flag={passwordConfirm}
          >
            <input
              placeholder="Repita a senha"
              value={passwordConfirm}
              type={passwordConfirmHide ? 'text' : 'password'}
              id="passwordConfirm_Input"
              onChange={event => setPasswordConfirm(event.target.value)}
              onFocus={() => setPasswordConfirmFocused(true)}
              onBlur={event => {
                event.target.value.length > 0
                  ? setPasswordConfirmFocused(true)
                  : setPasswordConfirmFocused(false);
              }}
              required
            />
            <Styled.Icon
              onClick={() => {
                setPasswordConfirmHide(!passwordConfirmHide);
              }}
              focused={passwordConfirmFocused}
            >
              {passwordConfirmHide ? (
                <HiOutlineLockOpen size={20} />
              ) : (
                <HiOutlineLockClosed size={20} />
              )}
            </Styled.Icon>
          </Styled.ContainerInput>
          <Styled.ErrorMessage Error={avaliableEmail}>
            <span>E-mail já cadastrado</span>
          </Styled.ErrorMessage>
          <Styled.registerMessage Error={registered}>
            <span>Conta Criada com sucesso</span>
          </Styled.registerMessage>
          <Button onClick={event => createUser(event)} type="submit">
            Cadastrar
          </Button>
          <Styled.Login>
            <p onClick={() => History('/')}>Já possui uma conta?</p>
          </Styled.Login>
        </Styled.InputsContainer>
      </Styled.LoginContainer>
      <Styled.ImageContainer>
        <img src={Logo} alt="compasso.uol" />
      </Styled.ImageContainer>
    </Styled.Page>
  );
}
