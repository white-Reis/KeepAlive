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
    @media screen and (max-width: 770px) {
  font-size: 7rem;
}
  }
}
p{
  color:${UI.BlackSecondary};
  font-size: .8rem;
}
`