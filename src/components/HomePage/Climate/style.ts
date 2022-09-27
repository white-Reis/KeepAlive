import styled from "styled-components";

export const ContainerClimate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin: 25px 90px 0 0;
width: 0.65vw;
height: 80px;
@media screen and (max-width: 770px) {
  margin-right: 0;
}
p{
  width: 120px;
  font-size:0.875rem;
  font-weight: 400;
  text-align: center;
}
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
export const ContentDiv = styled.div`
display: flex;
align-items: center;
`