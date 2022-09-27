import styled from "styled-components";
import * as UI  from '../../UI'

interface PropsInput {
  Error:boolean
  flag:string  
}
interface Props {
focused:boolean}

export const Container = styled.div<PropsInput>`
width: 100%;
margin-bottom: 32px;
border-radius: 50px;
padding: 5px;
display: flex;
align-items: center;
${(props) =>
    props.Error ? "border: 1px solid #ffffff;" : "border: 1px solid #E9B425;"}

input {
  width: 85%;
  height: 48px;
  border: none;
  background-color: transparent;
  color: ${UI.Secundary};
  outline: none;
  font-size:1rem;
  padding: 0 30px;
  ${(props) =>
    props.flag.length>0 && "font-size:3rem;letter-spacing: 8px;" }
}
`

export const Icon = styled.div<Props>`
display:flex;
align-items: center;
justify-content: center;
width: 15%;
transition:0.5s transform;
@media screen and (max-width:920px) {
  transform: translate(0);
}
${(props) =>
    props.focused ? "transform: translate(0)" : "transform: translate(50px, 0)"}
    `
