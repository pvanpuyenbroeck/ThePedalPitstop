import React from 'react'
import styled from 'styled-components'
import {Instagram,Twitter} from 'react-feather';
import { useState, useCallback, useEffect } from "react";
import { BREAKPOINTS } from '../constants';
import HamburgerNav from '../HamburgerNav';
import Link from 'next/link';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

export default function header(isMobile) {
    const isBreakpoint = useMediaQuery(BREAKPOINTS.tabletMin);
    const NavMenu = () =>{
        console.log(isBreakpoint);
            if(isBreakpoint){
                return <HamburgerMenu>Hamburger</HamburgerMenu>;
            }

                else{
                                return (
                <Contact>
                    <ContactInfo style={{ color: "var(--primarycolor)" }}>info@thepedalpitstop.be</ContactInfo>
                    <ContactInfo>
                        <Link href="/collection">Contact</Link>
                    </ContactInfo>
                    <Instagram />
                    <Twitter />
                </Contact>)}
        } 
  return (
      <HeaderWrapper>
          <Logo>The Pedal Pitstop</Logo>
          {/* <TitleWrapper>
              <Spacer />
              <Title></Title>
              <Spacer />
          </TitleWrapper> */}
        <NavMenu/>
                  {/* <Contact>
              <ContactInfo style={{ color: "var(--primarycolor)" }}>info@thepedalpitstop.be</ContactInfo>
              <ContactInfo>
                  <a>Contact</a>
              </ContactInfo>
              <Instagram />
              <Twitter />
          </Contact> */}
      </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
background:white;
padding:0;
    grid-area: header;
    display:flex;
    justify-content: space-between ;
    /* margin:0 40px; */
    height:96px;
    padding:var(--padding);
    align-items:center;
    & div{
        /* height: 100% ; */
    }
`;

const TitleWrapper = styled.div`
    position:absolute;
    left:16px;
    right:16px;
    justify-content:space-between;
    display:flex ;
    /* background:red ; */
`;

const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:32px;
    font-weight:500;
`;

const Contact = styled.div`
    color:var(--black75);
    display:flex;
    align-items:center;
    gap:16px;
    font-size:12px;

`;

const ContactInfo = styled.div`
    font-size: 15px;
`;

const Logo = styled.div`
    /* width:76px; */
    display:flex;
    align-items:center;
    font-size:1.5rem;
`;
const Spacer = styled.div`
    flex-grow:1;
`;

const HamburgerMenu = styled(HamburgerNav)`

`;