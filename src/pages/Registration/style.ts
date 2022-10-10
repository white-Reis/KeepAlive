import styled from 'styled-components';
import * as UI from '../../components/UI';
import BG from "../../assets/Images/MaskGroup.png";
import Button from '../../components/LoingPage/Button';

export const Page = styled.div`
  display: flex;
  height: 100vh;
  min-height: 950px;
  @media screen and (max-width:750px) {
    background-image: url(${BG});
    background-position: right;}
`

export const LoginContainer = styled.div`
  width: 50%;
  height: 100vh;
  min-height: 950px;
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
    min-width: 100px;
    margin-top: 3vh;
    width: 306px;
    height: 69px;
    
  }
  @media screen and (max-width:750px) {
  display:none;
}

`;

export const LogoImage = styled.img`
  min-width:100px;
  min-height: 18px;
  margin-top: 1vh;
  width: 32.5vw;
  height: 5.5vh ;
  display: none;
  position: fixed;
  top: 0;
  @media screen and (max-width:750px) {
  display:block;
  }
`

export const TextArea = styled.div`
width: 100%;
margin-bottom: 5vh;
h1 {
  min-width: 220px;
  font-size:  4rem;
  font-weight: 400;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width:750px){
   font-size:3rem ;
  }
  }
  p{
    margin-top: 2vh;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  }
`

export const InputsContainer = styled.form`
  width: 39.5%;
  min-width: 270px;
  backdrop-filter: blur(10px);

  label {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
    color: ${UI.Secundary};
    @media screen and (max-width:605px) {
    font-size: 1.5rem;
    }
  }
    @media screen and (max-width:750px) {
    min-width: 210px;
    margin-top: 4.5vh;
}
`;

interface passswordProps {
  focused:boolean

}
interface correctProps {

  correct:boolean
}
export const PasswordSpan = styled.span<correctProps>`

  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: ${(props) => props.correct?'#C12D18':'#E0E0E0'};

`
export const PasswordMessage = styled.div<passswordProps>`
width: 100%;
padding: 5px;
margin-bottom: 2vw;
position: absolute;
background-color: ${UI.BlackSecondary};
border-radius:5px;
border: 2px solid #E0E0E0;;
display: ${(props) => props.focused?'block':'none'};
  `

export const Login = styled.div`
width: 100%;
height: 20px;
margin-top: 2vw;
p {
margin-left: 10px;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: ${UI.Secundary};
cursor: pointer;
}
  span {
  color: ${UI.Primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}
`

interface PropsInput {
  Error:boolean
  flag:string
  visible:boolean  
}
interface Props {
focused:boolean}
interface PropsError {
Error:boolean}

export const ContainerInput = styled.div<PropsInput>`
width: 100%;
height: 7.8vh;
min-height: 40px;
margin-bottom: 3.05vh;
border-radius: 50px;
padding: 5px;
display: flex;
align-items: center;
${(props) =>
    props.Error ? "border: 1px solid #ffffff;" : "border: 1px solid #E9B425;"}

input {
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${UI.Secundary};
  outline: none;
  font-size:1rem;
  padding: 0 30px;
  ${(props) =>
    props.flag.length>0 && "font-size:2.5rem;letter-spacing: 8px;" }
 @media screen and (max-width:500px) {
  ${(props) =>
    props.flag.length>0 && "font-size:2rem;letter-spacing: 8px;" }
  }
${(props) =>
   { return props.visible && "font-size:1rem;letter-spacing: 0;" }}
}
`

export const Icon = styled.div<Props>`
display:flex;
align-items: center;
justify-content: center;
width:15%;
transition:0.5s transform;
@media screen and (min-width:279px) {
 transform: translate(0);
@media screen and (max-width:920px) {
  ${(props) =>
    props.focused ? "transform: translate(0)" : "transform: translate(40px, 0)"}
}
${(props) =>
    props.focused ? "transform: translate(0)" : "transform: translate(60px, 0)"}
    }
    `
export const ErrorMessage = styled.div<PropsError>`
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
export const registerMessage = styled(ErrorMessage)`
span{
  color:green;
}
`

export const arrowForMessage = styled.span`
padding: 5px;
background-color: #E0E0E0;
transform: translateY(6.53553391px) rotate(45deg);
position: absolute;
top:-12px;
right: 50%;
z-index: -1;
`
export const registerButton = styled.div`
width: 100%;
button{
  width: 100%;
  height: 7.8vh;
  min-height: 40px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: 5px 5px 15px 0px #00000080;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2;
  color: #ffffff;
  margin-top: 30px;
  
  @media screen and (max-width: 750px) {
    box-shadow: none;
  }
  :active {
    box-shadow: none;
  }
  }
`
