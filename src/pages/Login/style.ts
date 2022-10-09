import styled from 'styled-components';
import * as UI from '../../components/UI';
import BG from "../../assets/Images/MaskGroup.png";

interface Props {
  Error:boolean
}


export const Page = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width:750px) {
    background-image: url(${BG});
    background-position: right;}
  @media screen and (max-height:300px) {
   height: 80vw;}
   @media screen and (max-height:570px) {
height: 200vh;
}

`

export const LoginContainer = styled.div`
  width: 50%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${UI.Secundary};
  @media screen and (max-width:750px) {
    width:100%;
    height: 100%;
    background: transparent;
    backdrop-filter: blur(2px) brightness(30%);
}
@media screen and (max-height:570px) {
height: 200vh;
}

`;

export const ImageContainer = styled.div`
  width: 50%;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-position:right;
  img{
    margin-top: 3vh;
    width: 306px;
    height: 69px;
    
  }
  @media screen and (max-width:750px) {
  display:none;
}
`;
export const InputsContainer = styled.form`
  width: 39.5%;
  min-width: 270px;
  margin-top:9vh ;
  backdrop-filter: blur(10px);
  h2 {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
    color: ${UI.Secundary}
  }
  @media screen and (max-width:750px) {
  min-width: 210px;
margin-top: 4.5vh;
}
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3.75rem;
  font-weight: 400;
  text-align: left;
  line-height: 76px;
  color: ${UI.Secundary};
  @media screen and (max-width:750px) {
  margin-top: 4.5vh;
}
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  max-width: 300px;
  color: ${UI.Secundary};
`;


export const DivLogin = styled.div`
  width: 39.4%;
  min-width: 270px;
  @media screen and (max-width:750px) {
  min-width: 210px;
}
`;

export const LogoImage = styled.img`
  margin-top: 3vh;
  width: 32.5vw;
  height: 5.5vh ;
  display: none;
  position: fixed;
  top: 0;
  min-width: 225px;
  @media screen and (max-width:750px) {
  display:block;
  }
`

export const ErrorMessage = styled.div<Props>`
width: 99%;
display: flex;
justify-content: center;
position: relative;
span{
  position: absolute;
width: 280px;
color: ${UI.yellow};
font-size: 1rem;
font-weight: 700;
line-height: 20px;
text-align: center;
z-index: 2;
${(props) =>
    props.Error? "display: none;":"display: block;" }
@media screen and (max-width:280px) {
   width:100%;
    }
}
`

export const Register = styled.div`
width: 100%;
height: 20px;

p {
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: ${UI.Secundary};
cursor: pointer;
margin-top: 4vh;
}
`