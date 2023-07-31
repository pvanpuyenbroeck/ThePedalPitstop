import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import {QUERIES} from './constants'

export default function DefaultSection({Title,Body,ImageSrc}) {
    console.log(ImageSrc);
  return (
      <SectionWrapper>
          <LeftWrapper>
              <ImageWrapper>
                  <Image src={ImageSrc} fill={true} objectFit='cover' objectPosition='right'/>
              </ImageWrapper>
          </LeftWrapper>
          <RightWrapper>
              <TextWrapper>
                  {/* <h2>{Title}</h2> */}
                  <p>{Body}</p>
              </TextWrapper>
          </RightWrapper>
      </SectionWrapper>
  );
}



const SectionWrapper = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: var(--primarycolor);
    gap: 48px;
    flex-direction: column;

    & div {
        display: flex;
        /* align-items:center ; */
    }
    @media ${QUERIES.tabletAndUp} {
        flex-direction: row;
        height: 716px;
    }
`;



const LeftWrapper = styled.div`
    position: relative;

    @media ${QUERIES.tabletAndUp} {
        width: 50%;
        margin-left: -50px;
    }
`;

const RightWrapper = styled.div`
    width: 80%;
    color: var(--black80);
`;

const ImageWrapper = styled.div`
    height: 100%;
    display: flex;
    height: 600px;
    transform: scaleX(-1);
    overflow: hidden;

    @media ${QUERIES.tabletAndUp} {
        border-radius: var(--defaultBorderRadius);
    }
`;

const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100% ;
    max-width: 600px;
`;