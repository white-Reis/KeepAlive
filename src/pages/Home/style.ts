import styled from "styled-components";
import * as UI from '../../components/UI';
import imageBg from '../../assets/Images/bolaomob.svg'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
@media screen and (max-width: 600px) {
  align-items: center;
  height: 115vh;
}

@media screen and (max-height: 425px) {
  align-items: center;
  height: 90vw;
  align-items: initial;
}
`

export const Header = styled.div`
  width: 100%;
  height: 15.65vh;
  display: flex;
  justify-content: space-between;
@media screen and (max-width: 600px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom:2vh;
  }
@media screen and (max-height: 425px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
export const HomeLogo = styled.img`
  margin: 25px 0 0 40px ;
  width: 150px;
  height: 42px;
@media screen and (max-width: 760px) {
  margin: 30px 0 0 0;
  }
@media screen and (max-height: 425px) {
  margin: 50px 0 0 0;
}
`
export const TextContainer = styled.div`
  height: 35.5vh;
  margin-right: 7vw;
  height: 33.5vh;
  text-align: end;

h2{
font-size:2rem;
color: ${UI.Primary};
@media screen and (max-width: 1460px) {
  font-size: 1.25rem;}
@media screen and (max-width: 1325px) {
  font-size: 1rem;}
}
p{
  font-size: 1.5rem;
  color: ${UI.Others};
  @media screen and (max-width: 1460px) {
    font-size: 1.25em;}
  @media screen and (max-width: 1325px) {
    font-size: 1rem;}
}
h1{
    font-size:4rem;
    color: ${UI.Primary};
  @media screen and (max-width: 1460px) {
      font-size: 3.5rem;}
  @media screen and (max-width: 1325px) {
      font-size: 3rem;}
  @media screen and (max-width: 1110px) {
      font-size: 2.5rem;}
  @media screen and (max-width: 950px) {
      font-size: 2.25rem;}
  @media screen and (max-width: 860px) {
      font-size: 2rem;} 
      @media screen and (max-width: 860px) {
      font-size: 1.75rem;} 
    }
    @media screen and (max-width:425px) {
      height: 40vh;
    }
    @media screen and (max-height: 425px) {
      margin-top:35vh;
    }
    @media screen and (max-width:375px) {
      height: 40vh;
    }
    @media screen and (max-width:325px) {
      height: 55vh;
    }
`
export const ImageCompasso = styled.img`
  width: 43vw;
  height: 72.38vh;
  position: absolute;
  bottom:2.2vh;
  left: -12.12vw;
  z-index: -1;

@media screen and (max-width: 1400px) {
  bottom:1.1vh;}
@media screen and (max-width: 660px) {
  left: -18.12vw;
  }
@media screen and (max-width: 600px) {
  display:none
  }
@media screen and (max-height: 425px) {
  position: relative;
  top: 80px;
}
` 
export const Footer = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 9.25vh;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  overflow: hidden;
@media screen and (max-width: 600px) {
  min-height: 180px;
  height: 18.5vh;
  flex-direction: column-reverse;
  justify-content: center;
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
  width: 28.125vw;
  font-size: .75rem;
  font-weight: 400;
  line-height: 15px;
  color: ${UI.Secundary};
  text-align: right;
@media screen and (max-width: 600px) {
  width: 100%;
  text-align: center;
  border-top: 1px solid white;
  padding: 10px 5px;
      }
@media screen and (max-width:960px) {
    width: 100%;
  }
    }
  }
span { 
  padding: 30px .5px;
  background:${UI.Secundary};
  margin-left: 35px;
@media screen and (max-width: 940px) {
  margin-left: 15px;}
@media screen and (max-width: 600px) {
  display:none;
  margin:0;}
}
@media screen and (max-width: 600px) {
  width: 100%;
}
`
export const FooterButtonDiv = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
@media screen and (max-width: 600px) {
  width:100%;
}
`
export const FooterRightContainer =styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
@media screen and (max-width:600px) {
  display:none ;
}
`
interface Props {
  colored:boolean
}

export const ButtonsHome=styled.button<Props>`
  min-width: 100px;
  width: 4.8vw;
  height: 100%;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  border: none;
  cursor: pointer;
  color: ${({colored}) => {return colored ? '#C12D18' : 'white';}};
  background: ${({colored}) => {return colored?'white':'transparent'}};
`
export const ButtonsHomeMobile =styled(ButtonsHome)`
  display: none;
  width: 33%;
@media screen and (max-width:600px) {
  display:block ;
}
`