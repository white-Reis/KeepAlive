import styled from 'styled-components';
import * as UI from '../../components/UI';
import BG from "../../assets/Images/MaskGroup.png";

interface Props {
  Error:boolean
}


export const Page = styled.div`
  display: flex;
  height: 100vh;
 
`;

export const LoginContainer = styled.div`
  width: 50%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${UI.Secundary};
  @media screen and (max-width:750px) {
  width:100%;
  height: 100vh;
}
  @media screen and (max-width:380px) {
  width:100%;
}
`;
export const ImageContainer = styled.div`
  width: 50%;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  img{
    margin-top: 3vh;
    width: 306px;
    height: 69px;
    
  }
  @media screen and (max-width:1080px) {
  
  background-position:bottom 0 right 0;
}
  @media screen and (max-width:750px) {
  display:none;
}
`;
export const InputsContainer = styled.form`
  width: 370px;
  min-width: 300px;
  margin-top:9vh ;
  h2 {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
    color: ${UI.Secundary}
  }
  @media screen and (max-width:370px) {
  width:auto;
}
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3.75rem;
  font-weight: 400;
  line-height: 76px;
  color: ${UI.Secundary};
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  max-width: 300px;
  color: ${UI.Secundary};
`;


export const DivLogin = styled.div`
  width: 370px;
  @media screen and (max-width:750px) {
  width:auto;
}

`;

export const LogoImage = styled.img`
  margin-top: 3vh;
  width: 280px;
  height: 60px;
  display: none;
  position: fixed;
  top: 0;
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
width: 284px;
color: ${UI.yellow};
font-size: 1rem;
font-weight: 700;
line-height: 20px;
text-align: center;
z-index: 2;
${(props) =>
    props.Error? "display: none;":"display: block;" }
}

`