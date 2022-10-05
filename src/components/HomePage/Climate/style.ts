import styled from "styled-components";

export const ContainerClimate = styled.div`
display: flex;
flex-direction: column;
margin: 2.3vh 2.3vw 0 0;
height: 80px;
p{
  width: 120px;
  font-size:0.875rem;
  font-weight: 400;
  text-align: center;
  @media screen and (max-height: 425px) {
    margin-bottom:2vw;
  }
}
@media screen and (max-width: 600px) {
 margin: 1vh 0 1vh 0;
  }
@media screen and (max-height: 425px) {
    margin: 1vh 0 0 0;
  }

`
export const ContentDiv = styled.div`
width: 100%;
height: 7.22vh;
display: flex;
align-items: center;
img {
  margin-right:10px;
  width: 30px;
  height: 18.5px;
}
span{
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}

`