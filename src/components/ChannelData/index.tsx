import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(8).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Anderson Santos"
            date="21/06/2020"
            content="Hoje é meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Anderson Santos"
          date="21/06/2020"
          hasMention
          isBot
          content={
            <>
              <Mention>@Anderson Santos</Mention>, bla bla bla bla bla bla bla
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;
