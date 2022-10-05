import styled from "styled-components";
import * as UI from '../../UI'


export const TimeOut = styled.div`
min-width: 93px;
width: 239px;
height: 72px;
display: flex;
@media screen and (max-width: 1110px){
 font-size:10px ;
}
@media screen and (max-width: 760px){
 flex-direction: column;
 width:33%;
 justify-content: start;
 align-items: center;
}
`

export const RefreshMessage = styled.div`
min-width: 76px;
width: 50%;
display: flex;
flex-direction: column;
justify-content:center ;
margin-left: 6.4vw;
p{
  height: 20px;
  font-size: 14px;
  line-height: 17.75px;
  font-weight: 400;
  text-align: right;
  color: white;
  @media screen and (max-width: 1110px){
 font-size:12px ;
}
  @media screen and (max-width: 760px){
  text-align: center;
}
}
@media screen and (max-width:1110px) {
  margin-left: 1.7vw;
}
@media screen and (max-width:760px) {
  height:25%;
}

`
export const TimeOutTimer = styled.div`
min-width: 76px;
width: 50%;
height: 70px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 1.7vw;
h1 {
height:50px ;
font-size: 3rem;
font-weight: 700;
line-height: 61px;
text-align: center;
color: white;
@media screen and (max-width: 1110px){
 font-size:2rem ;
}
@media screen and (max-width: 760px){
font-size:1rem ;
height: 40px;
}
@media screen and (max-width: 600px){
font-size:1rem ;
}
@media screen and (max-width: 500px){
height: 40px;
font-size:1rem ;
height: 40px;
}
}
p{
  font-size: 14px;
  line-height: 17.75px;
  font-weight: 400;
  text-align: right;
  color: white;
  @media screen and (max-width: 1110px){
 font-size:12px ;
}
  @media screen and (max-width: 760px){
  height:25%;
}
}
`
