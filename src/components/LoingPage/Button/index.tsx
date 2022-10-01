import { ButtonHTMLAttributes } from 'react';
import * as Styled from './style';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: Props) {
  return (
    <Styled.Container>
      <button {...rest}>{children}</button>
    </Styled.Container>
  );
}
