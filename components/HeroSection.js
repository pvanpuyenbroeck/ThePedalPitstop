import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import orangeBike from '../public/Assets/OrangeBlackBike.jpeg';
import Button from './Button';
import { QUERIES } from './constants';

export default function HeroSection() {
  return (
      <HeroWrapper>
          <ContentWrapper>
              <LeftWrapper>
                  <h1>Topkwaliteit tweedehands fietsen met 6 maanden garantie!</h1>
                  <h2>
                      Bespaar tot 50% voor een fiets die als nieuw rijdt en er ook als nieuw uitziet. Ontdek nu onze collectie van betaalbare
                      kwaliteitsvolle fietsen!
                  </h2>
                  <CTA>
                  <Button text='Bekijk de collectie'></Button>
                  </CTA>
              </LeftWrapper>
              <RightWrapper>
                  <ImageWrapper>
                      <HeroImage src={orangeBike} height={500} width={500} objectFit="cover"/>
                  </ImageWrapper>
              </RightWrapper>
          </ContentWrapper>
      </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
    height: 800px;
    width: clamp(400px,1200px,100%);
`;

const ContentWrapper = styled.div`
    margin: 64px 0;
    display: flex;
    width: 100%;
    color: var(--black);
    flex-direction:column ;
    /* flex-wrap:wrap; */
    flex-gap: 48px;
    position: relative;
    width: 100%;
    & > div {
        flex-grow: 1;
        /* max-width: 600px; */
        /* min-width: 200px; */
    }

    @media ${QUERIES.tabletAndUp} {
        height: 500px;
        justify-content: space-around;
        flex-direction:row ;
    }
`;

const ImageWrapper = styled.div`
    transform: scaleX(-1);
    position: absolute;
    right: -70px;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
    /* width: min(600px,40%) ; */
`;
const HeroImage = styled(Image)`
    flex-grow: 1;
    margin-right: -50px;
    height: 100%;
    border-radius: 15px;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    padding:0 16px;
    height: 100%;
    text-align: center;
    align-items: center;
    max-width: 600px;

    & h2 {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.9rem;
        margin-top: 48px;
    }

    & h1 {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 2.9rem;
        margin-top: -0.4rem;
        letter-spacing: -1.2px;
    }
`;

const RightWrapper = styled.div`

    width: 100%;
    display:flex;
    justify-content:end;
    position:relative ;
flex-shrink:1;
    @media(max-width:1000px){
        flex-grow:2;
    }
`;

const CTA = styled.div`
    margin-top:120px;
    position:initial ;
    bottom:0px;

    @media ${QUERIES.tabletAndUp}{
        position: absolute;
    }
`;