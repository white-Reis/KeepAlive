import styled from "styled-components";

interface Props
{
  variant:string
}
export const ContainerTimeOut = styled.div`
display: flex;
align-items: center;
margin-left: 6.4vw;
@media screen and (max-width: 940px) {
  margin: 0;
}
@media screen and (max-width: 510px) {
  flex-direction:column;
  align-items: center;
}
`
export const ContainerTimer = styled.div`
width:100px;
height: 60px;
flex-flow: column;
align-items: center;
margin-left: 30px;
position: relative;
h1{
  font-size: 3rem;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: white;
  @media screen and (max-width: 800px) {
  font-size: 2rem;
}
  @media screen and (max-width: 510px) {
  font-size: 1rem;
  position:relative;
  bottom: 10px;
  right: 6px;
}
}
p{
  font-size: .875rem;
  text-align: center;
  line-height: px;
  color: white;
  position: absolute;
  bottom:-10px;
  right: 20%;
  @media screen and (max-width: 510px) {
}
@media screen and (max-width: 510px) {
  position: absolute;
  bottom:5px;
  left: 10px;
  text-align: center;
  
}
}
@media screen and (max-width: 520px) {
  margin: 0;
}
`
export const ContainerText = styled.div`
display: flex;
align-items: center;
width: 108px;
height: 50px;
p{
  font-size: .875rem;
  text-align: right;
  color: white;
  @media screen and (max-width: 510px) {
  text-align: center;
}
}
@media screen and (max-width: 510px) {
  position: relative;
  width: 80px;
  text-align: center;
  top: 0;
  right: 10PX;
}
`

