import styled from 'styled-components'
import * as UI from  '../../UI'

export const Cloak = styled.div`
text-align: center;
div {
  width: 99%;
  height: 146px;
  display: flex;
  justify-content: center;
  span{
    font-weight: 700;
    font-size: 9rem;
    color:${UI.BlackSecondary};
  }
}
p{
  color:${UI.BlackSecondary};
  font-size: .8rem;
}
@media screen and (max-width:600px) {
  display:none;
}
@media screen and (max-height: 425px) {
  display: none;
}
`