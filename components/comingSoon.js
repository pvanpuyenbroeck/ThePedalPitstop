import React from 'react'
import styled from 'styled-components'

export default function comingSoon() {
  return (
      <Wrapper>
          <Message>
              <div>The Pedal Pitstop</div>
              <div>Coming soon..</div>
          </Message>
      </Wrapper>
  );
}

const Wrapper = styled.main`
    grid-area: main;
    width: 100vw;
    height: 100vh;
    background: var(--primarycolor);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Message = styled.div`
    color: white;
    font-size: 24px;
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;

    & div:first-of-type{
        font-size:48px;
    }
`;
