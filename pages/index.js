import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header';
import styled from 'styled-components';
import ComingSoon from '../components/comingSoon';
import HeroSection from '../components/HeroSection';
import GarantieSection from '../components/GarantieSection';
import DefaultSection from '../components/DefaultSection';
import bikeImage from "../public/Assets/SaltamontesLarge.jpeg";
import DefaultSectionFlipped from '../components/DefaultSectionFlipped';
import WomanOnBikeImage from '../public/Assets/WomenOnBikeLarge.jpeg';
import KidOnBike from '../public/Assets/KidOnBikeLarge.jpeg';

export default function Home(props) {
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
              <style>@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');</style>
          </Head>
          <Header isMobile={props.isSsrMobile} />
          <Main>
              <HeroSection />
              <DefaultSection
                  ImageSrc={bikeImage}
                  Title='Test'
                  Body='Het vinden van betaalbare en betrouwbare fietsen kan een echte uitdaging zijn voor fietsliefhebbers. Veel mensen willen graag genieten van het plezier van fietsen, of het nu gaat om woon-werkverkeer, fitness of ontspannen ritten. Echter, de kosten van nieuwe fietsen vormen vaak een grote hindernis die mensen ervan weerhoudt hun fietsdromen te verwezenlijken. Deze situatie laat talloze potentiële fietsers ontmoedigd achter en onvermogen om te genieten van de vele voordelen die fietsen met zich meebrengt.'
              />
              <DefaultSectionFlipped
                  ImageSrc={WomanOnBikeImage}
                  Title='Test'
                  Body='Het is frustrerend om een milieuvriendelijk vervoermiddel te willen hebben of een gezonde buitenactiviteit te willen doen, 
                  maar belemmerd te worden door de hoge prijzen van nieuwe fietsen. 
                  De huidige markt wordt overspoeld met dure opties, 
                  waardoor het voor mensen met een beperkt budget moeilijk is om een 
                  geschikte fiets te vinden zonder de bank te breken. Bovendien vergroot de angst om een ondermaatse fiets te kopen van onbetrouwbare bronnen of het gedoe van het doorzoeken van talloze online advertenties. Dit overweldigende en ontmoedigende proces zorgt er vaak voor dat aspirant-rijders vastlopen en geen praktische oplossing kunnen vinden.'
              />
              <DefaultSection
                  ImageSrc={KidOnBike}
                  Title='Test'
                  Body='In onze winkel bieden we een breed assortiment tweedehands fietsen van hoge kwaliteit tegen betaalbare prijzen. We zorgen ervoor dat elke fietsliefhebber zijn perfecte fiets kan vinden zonder in te leveren op kwaliteit of budget. Ons team inspecteert en renoveert elke fiets grondig voordat deze te koop wordt aangeboden. Zo garanderen we dat onze klanten fietsen ontvangen die aan hun verwachtingen voldoen en langdurige prestaties leveren. Bij ons vind je opties die passen bij de behoeften en voorkeuren van elke fietser, of je nu een student bent op zoek naar een betaalbaar vervoermiddel of een fervent fietser die een upgrade wil. Bezoek onze winkel vandaag nog en ontdek jouw perfecte tweedehands fiets voor een fractie van de kosten.'
              />
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