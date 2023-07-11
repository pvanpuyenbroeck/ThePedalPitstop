import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header';
import styled from 'styled-components';
import ComingSoon from '../components/comingSoon';
import HeroSection from '../components/HeroSection';
import GarantieSection from '../components/GarantieSection';

export default function Home(props) {
const isMobile = useContext(IsSsrMobileContext);
  return (
      <MainContainer>
          <Head>
              <title>The Pedal Pitstop</title>
              <meta title='Fiets herstel techniecker op locatie met een bakfiets' />
              <meta
                  name='description'
                  content='Fiets herstel bakfiets op locatie bij uw thuis,bedrijf of event. Kuisen van alle fietsen, top service'
              />
              <link rel='icon' href='/favicon.ico' />
              <style>@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');</style>
          </Head>
          <Header isMobile={props.isSsrMobile} />
          <Main>
              <HeroSection />
              <GarantieSection />
          </Main>
          {/* <ComingSoon /> */}
          <Footer></Footer>
      </MainContainer>
  );
}

const MainContainer = styled.div`
    background: linear-gradient(180deg, #f6f5f3 0%, #fff 100%);
    line-height:1,5rem;
    /* display:grid;
  grid-template-columns: 250px 1fr 100px; 
  grid-template-rows:4rem 1fr 5rem;
  min-height: 100vh;
  grid-template-areas:
  'header header header'
  'aside main main'
  'footer footer footer' */
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;

const Message = styled.div`
  color:white;
  font-size: 24px;
  display:flex ;
  width:fit-content ;
  flex-direction:column;
  align-items:center;

`;

const Footer = styled.footer`
  grid-area:footer;
  background-color:var(--secondarycolor) ;
`;