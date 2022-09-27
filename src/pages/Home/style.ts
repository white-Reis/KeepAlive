import styled from "styled-components";
import * as UI from '../../components/UI';

export const HomeContainer = styled.div`
width: 100%;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
position: fixed;
top: 0;
@media screen and (max-width: 770px) {
  flex-direction:column;
  align-items: center;
}
 @media screen and (max-width: 520px) {
  top:100px;  
}
`


export const HomeLogo = styled.img`
margin: 25px 0 0 40px ;
width: 150px;
height: 42px;

`
export const TextContainer = styled.div`
margin: 32.25vh 7vw 32.25vh 0;
height: 35.5vh;
text-align: end;

h1{
font-size:2rem;
color: ${UI.Primary};
}
p{
  font-size: 1.5rem;
  color: ${UI.Others};
  @media screen and (max-width: 520px) {
  font-size: 1rem;
}
}
div {
  h1{
      font-size:4rem;
      color: ${UI.Primary};
      @media screen and (max-width: 1024px) {
      font-size: 3rem;}
      @media screen and (max-width: 770px) {
      font-size: 2rem;
      }
      @media screen and (max-width: 520px) {
      font-size: 1.5rem;

}
  }
  p{
    font-size: 1.5rem;
    color: ${UI.Others};
  }
}
@media screen and (max-width: 1380px) {
  margin: 24.25vh 7vw 32.25vh 0;
}
@media screen and (max-width: 770px) {
  margin: 32.25vh 7vw 22.25vh 0;
}
@media screen and (max-width: 640px) {
  margin: 40vh 5vw 10vh 0;
}
@media screen and (max-width: 520px) {
  margin-top:50vh;
}

`
export const ImageCompasso = styled.img`
width: 43vw;
height: 72.38vh;
position: fixed;
bottom:24px;
left: -233px;

@media screen and (max-width: 1550px) {
  width: 36.5vw;
  height: 65vh;
  bottom: -10vh;
}
@media screen and (max-width: 640px) {
  display: none;
}

` 

export const Footer = styled.div`
min-height: 100px;
display: flex;
align-items: center;
justify-content: end;
width: 100%;
height: 9.25vh;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
position: fixed;
bottom: 0;
overflow: hidden;
@media screen and (max-width: 520px) {
top: 0;
  
}
`

export const DescriptionFooter = styled.div`
width: 50%;
display: flex;
justify-content: end;
div{
display: flex;
align-items: center;
p{
  width: 540px;
  font-size: .75rem;
  font-weight: 400;
  line-height: 15px;
  color: ${UI.Secundary};
  text-align: right;
  @media screen and (max-width: 1240px) {
  width: auto;
}
@media screen and (max-width: 770px) {
  text-align:start;
  border-right: 1px solid white;

}
}
span { 
  padding: 30px .5px;
  background:${UI.Secundary};
  margin-left: 35px;
  @media screen and (max-width: 770px) {
    display: none;
}
}
@media screen and (max-width: 940px) {
  width: auto;
}

@media screen and (max-width: 550px) {
  display: none;

}
}
`

export const FooterButtonDiv = styled.div`
width: 50%;
display: flex;
height: 100%;
justify-content: space-between;
@media screen and (max-width: 770px) {
  width: 100%;

}

`
export const FooterRightContainer =styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`


export const ButtonsHome=styled.button`
  min-width: 100px;
  width: 4.8vw;
  height: 100%;
  background: transparent;
  color: white;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  border: none;
  cursor: pointer;
  :hover {
    color: ${UI.Primary};
    background: white
  }
`