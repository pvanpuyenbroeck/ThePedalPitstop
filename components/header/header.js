import React from 'react'
import styled from 'styled-components'
import {Instagram,Twitter} from 'react-feather';

import { useState,useEffect } from "react";
import MobileDetect from "mobile-detect";
import { useContext } from "react";


export const getIsSsrMobile = (context) => {
    const md = new MobileDetect(context.req.headers["user-agent"]);
console.log(md);
    return Boolean(md.mobile());
};


export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

   export const useIsMobile = () => {
       console.log(useContext(IsSsrMobileContext));
       const isSsrMobile = useContext(IsSsrMobileContext);
       const { width: windowWidth } = useWindowSize();
       const isBrowserMobile = !!windowWidth && windowWidth < 992;

       return isSsrMobile || isBrowserMobile;
   };
export default function header(isMobile) {
    const NavMenu = () =>{
        console.log(isMobile);
        if (isMobile) {
            return (
                <Contact>
                    <ContactInfo style={{ color: "var(--primarycolor)" }}>info@thepedalpitstop.be</ContactInfo>
                    <ContactInfo>
                        <a>Contact</a>
                    </ContactInfo>
                    <Instagram />
                    <Twitter />
                </Contact>
            );
        } else {
            return <div>not</div>;
        }
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