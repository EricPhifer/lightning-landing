import MuxPlayer from '@mux/mux-player-react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const Header = styled.header`
  width: 100vw;
  height: 100%;
  position: relative;
  display: inline-flex;
  z-index: 0;
  // optional
  background-image: linear-gradient(
    to bottom right,
    var(--yellow),
    var(--orange),
    var(--red)
  );

  // Landscape view
  @media only screen and (max-height: 710px) {
  }
`

const LogoContainer = styled.section`
  width: 100vw;
  height: var(--logo-top);
  position: absolute;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  color: var(--white);
  z-index: 10;
  img {
    align-self: center;
    margin-left: var(--img-left);
  }

  // Landscape View
  @media only screen and (max-height: 450px) {
    width: 10vw;
    height: 100%;
    img {
      display: none;
    }
  }
`

const Title = styled.h1`
  width: calc(80% - var(--img-left));
  margin: 0;
  font-size: 8rem;
  font-weight: 300;
  text-transform: uppercase;
  align-self: center;
  line-height: 1;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);
  // Mobile View
  @media only screen and (max-width: 500px) {
    font-size: 4rem;
  }
  // Landscape View
  @media only screen and (max-height: 450px) {
    writing-mode: sideways-lr;
  }
`

const Container = styled.section`
  width: 100%;
  height: 75dvh;
  position: absolute;
  top: var(--logo-top);
  right: 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: var(--white);
  z-index: 10;
  // Mobile View
  @media only screen and (max-width: 500px) {
    height: 55dvh;
  }
  // Landscape View
  @media only screen and (max-height: 450px) {
    height: 100%;
    width: 75vw;
    top: 10rem;
    left: 17rem;
    margin-top: -10rem;
    margin-left: -10rem;
  }
`

const Motto = styled.h2`
  height: 10dvh;
  margin: 0;
  padding: 2rem 5rem;
  font-size: 3vh;
  text-align: left;
  // Mobile view
  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 750px) {
    font-size: 2.5vh;
  }
  @media only screen and (max-height: 650px) {
    display: none;
  }
`

const VideoContainer = styled.div`
  width: 100%;
  height: calc(65dvh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  mux-player {
    object-fit: contain;
    max-width: 80rem;
    width: 100%;
    height: auto;
  }
  // Mobile View
  @media only screen and (max-width: 500px) {
    height: calc(45dvh - 4rem);
  }
  // Landscape View
  @media only screen and (max-height: 630px) {
    height: 100%;
  }
`

const HeroesCall = styled.a`
  width: 100%;
  height: var(--call-btn);
  background-color: var(--blue);
  color: var(--white);
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  svg {
    font-size: 3rem;
  }
  &:hover {
    background-color: var(--white);
    color: var(--blue);
  }
  @media only screen and (max-width: 400px) {
    font-size: 1.8rem;
  }

  // Landscape View
  @media only screen and (max-height: 540px) {
    padding: 1rem 2rem;
    font-size: 2rem;
  }
  @media only screen and (max-height: 400px) {
    padding: 0.5rem 1rem;
    font-size: 1.65rem;
  }
  @media only screen and (max-height: 450px) {
    width: 10vw;
    height: 100%;
    right: 0;
    writing-mode: sideways-lr;
    svg {
      display: none;
    }
  }
`

export default function StoryHero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityHero {
        nodes {
          id
          alt
          title
          source
          tagline
          herocall
          video {
            asset {
              playbackId
              assetId
            }
          }
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)
  const { nodes } = hero
  return (
    <>
      {nodes.map(node => (
        <Header key={node.id}>
          <LogoContainer>
            {node.image ? (
              <SanityImage
                {...node.image}
                alt={node.alt}
                style={{
                  width: '20%',
                  height: '75%',
                  objectFit: 'contain',
                  auto: 'format',
                }}
              />
            ) : (
              <div />
            )}
            <Title>{node.title}</Title>
          </LogoContainer>
          <Container>
            <Motto>{node.tagline}</Motto>
            <VideoContainer>
              <MuxPlayer
                streamType="on-demand"
                playbackId="VOztAexD9KmGXKx5jfxPkp8gIvGfNtjIN39vCTXF01Eg"
                metadataVideoTitle="Lightning Bundle Video"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                poster="https://image.mux.com/VOztAexD9KmGXKx5jfxPkp8gIvGfNtjIN39vCTXF01Eg/thumbnail.png?time=66"
              />
            </VideoContainer>
          </Container>
          <HeroesCall
            href="https://ericphifer.com/bundles/lightning/intake"
            rel="noopener noreferrer"
            target="_blank"
          >
            {node.herocall} <PiCaretRightBold />
          </HeroesCall>
        </Header>
      ))}
    </>
  )
}
