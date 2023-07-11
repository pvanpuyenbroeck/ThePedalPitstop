import React from 'react'
import styled from 'styled-components'
export default function Button({text}) {
  return (
    <Wrapper>
        <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    padding: 16px 32px;
    align-items: center;
    background: var(--secondarycolor);
    border-radius: 100px;
    box-shadow: 0px 2.767256498336792px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02),
        0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.04),
        0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.05),
        0px 100px 80px 0px rgba(0, 0, 0, 0.07);

        width:fit-content ;
        font-weight:700;

        &:hover{
            cursor:pointer;
        }
`;
