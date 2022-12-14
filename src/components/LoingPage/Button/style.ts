import styled from "styled-components";
import * as UI  from '../../UI'


export const Container = styled.div`
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
  margin-top: 70px;
  
  @media screen and (max-width: 750px) {
    box-shadow: none;
  }
  :active {
    box-shadow: none;
  }
  }
`
