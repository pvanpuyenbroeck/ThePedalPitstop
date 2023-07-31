import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { QUERIES } from './constants';

export default function DefaultSectionFlipped({Title,Body,ImageSrc}) {
    console.log(ImageSrc);
  return (
      <SectionWrapper>
          <LeftWrapper>
              <TextWrapper>
                  {/* <h2>{Title}</h2> */}
                  <p>{Body}</p>
              </TextWrapper>
          </LeftWrapper>
          <RightWrapper>
              <ImageWrapper>
                  <Image src={ImageSrc} fill={true} objectFit='cover' objectPosition='40% 50%' />
              </ImageWrapper>
          </RightWrapper>
      </SectionWrapper>
  );
}



const SectionWrapper = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    /* background-color: var(--primarycolor); */
    gap: 48px;
    flex-direction: column-reverse;

    & div {
        display: flex;
        /* align-items:center ; */
    }
    @media ${QUERIES.tabletAndUp} {
        flex-direction: row;
        height: 716px;
    }
`;



const RightWrapper = styled.div`
    position: relative;

    @media ${QUERIES.tabletAndUp} {
        width: 50%;
        margin-right: -50px;
    }
`;

const LeftWrapper = styled.div`
    color: var(--black20);
    width: 80% ;

    @media ${QUERIES.tabletAndUp} {
        width: 50%;
        margin-left: 32px;
    }
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