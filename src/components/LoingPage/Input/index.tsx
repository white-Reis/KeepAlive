import * as react from 'react';
import * as Styled from './style';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLockClosed } from 'react-icons/hi';

interface Props extends react.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  icon: 'user' | 'lock' | 'card';
  error: boolean;
  flag: string;
}

export default function Input({
  text,
  error,
  flag,
  icon = 'user',
  ...rest
}: Props) {
  const [focused, setFocused] = react.useState(false);
  return (
    <Styled.Container Error={error} flag={flag}>
      <input
        placeholder={text}
        onFocus={() => setFocused(true)}
        onBlur={event =>
          event.target.value.length > 0 ? setFocused(true) : setFocused(false)
        }
        {...rest}
      />
      <Styled.Icon focused={focused}>
        {icon === 'user' ? (
          <AiOutlineUser size={20} />
        ) : icon === 'card' ? (
          <AiOutlineMail size={20} />
        ) : (
          <HiOutlineLockClosed size={20} />
        )}
      </Styled.Icon>
    </Styled.Container>
  );
}
