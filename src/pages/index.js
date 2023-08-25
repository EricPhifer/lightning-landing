import * as React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
// Hero
import About from '../components/About'
import Contact from '../components/Contact'
import EventsNP from '../components/EventsNP'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Map from '../components/Map'
import Partners from '../components/PartnersNP'
import Plan from '../components/Plan'
import PlanWithImage from '../components/PlanWithImage'
import SectionWithLink from '../components/SectionWithLink'
import Sections from '../components/Sections'
import Social from '../components/Social'
import Testimonials from '../components/Testimonials'

const HeroStyles = styled.div`
  height: 100vh;
  margin-top: 4rem;
`

const Main = styled.main`
  width: 100vw;
  height: 100%;
  padding-bottom: 12rem;
  @media only screen and (max-width: 500px) {
    width: 98vw;
  }
  @media only screen and (max-height: 600px) {
    width: 96vw;
  }
`

const LightBlock = styled.section`
  width: 100%;
  min-height: 25rem;
  padding: 5rem 2rem;
  color: var(--black);
  p {
    color: var(--black);
  }
`

const DarkBlock = styled.section`
  width: 100%;
  min-height: 50rem;
  padding: 5rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--white);
  #nav-dots {
    background: var(--white);
    &:hover {
      background: var(--blue);
    }
    &:active {
      border: 0.1rem dotted var(--blue);
    }
    &:focus {
      background: var(--blue);
    }
    &[aria-current='page'] {
      background: var(--blue);
    }
  }
  input,
  textarea {
    color: var(--white);
  }
`

const WhiteSpace = styled.div`
  width: 80%;
  max-width: 98rem;
  margin: 10rem auto;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`

const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

export default function IndexPage() {
  return (
    <>
      <HeroStyles id="top">
        <Hero />
      </HeroStyles>
      <Main>
        <LightBlock>
          <WhiteSpace>
            <H2 id="section">About</H2>
            <HR />
            <About />
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="testimonials">Testimonials</H2>
            <HR />
            <Testimonials />
          </WhiteSpace>
        </DarkBlock>
        <LightBlock>
          <WhiteSpace>
            <H2 id="contact">Contact Us</H2>
            <HR />
            <Contact />
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="volunteer">Get Involved</H2>
            <HR />
            <EventsNP />
          </WhiteSpace>
        </DarkBlock>
        <LightBlock>
          <WhiteSpace>
            <H2 id="location">Location</H2>
            <HR />
            <Location />
            <Map />
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="partners">Partners</H2>
            <HR />
            <Partners />
          </WhiteSpace>
        </DarkBlock>
        <LightBlock>
          <WhiteSpace>
            <H2 id="plan">Plan</H2>
            <HR />
            <Plan />
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="planwithimage">Plan With Image</H2>
            <HR />
            <PlanWithImage />
          </WhiteSpace>
        </DarkBlock>
        <LightBlock>
          <WhiteSpace>
            <H2 id="sections">Section</H2>
            <HR />
            <Sections />
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="partners">Section With Link</H2>
            <HR />
            <SectionWithLink />
          </WhiteSpace>
        </DarkBlock>
        <LightBlock>
          <WhiteSpace>
            <H2 id="Social">Social Media</H2>
            <HR />
            <Social />
          </WhiteSpace>
        </LightBlock>
      </Main>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
