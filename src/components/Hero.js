// import MuxPlayer from '@mux/mux-player-react'
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
  height: 100%;
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
  // Mobile view
  @media only screen and (max-width: 850px) {
    height: var(--title-height);
    top: 2rem;
  }
  @media only screen and (max-height: 500px) {
    top: 0.2rem;
  }
`

const Title = styled.h1`
  width: calc(80% - var(--img-left));
  margin: 0;
  margin-top: var(--logo-top);
  font-size: 7vmin;
  font-weight: 300;
  text-transform: uppercase;
  align-self: flex-start;
  line-height: 1;
  letter-spacing: 2vmin;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);

  // Mobile view
  @media only screen and (max-width: 500px) {
    font-size: 4.25rem;
  }
  @media only screen and (max-width: 370px) {
    font-size: 3.25rem;
  }

  // Landscape view
  @media only screen and (max-height: 500px) {
    margin-top: 1rem;
    font-size: 4.5rem;
  }

  // Tall view
  @media only screen and (min-height: 893px) and (min-width: 600px) {
    font-size: 6rem;
    letter-spacing: 1.9rem;
  }
  @media only screen and (min-height: 893px) and (min-width: 851px) and (max-width: 1025px) {
    font-size: 5rem;
    letter-spacing: 1.5rem;
  }
`

const Container = styled.section`
  width: 75%;
  height: var(--container-height);
  position: absolute;
  top: var(--container-top);
  right: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  color: var(--white);
  text-align: center;
  z-index: 10;
  // Mobile view
  @media only screen and (max-width: 850px) {
    width: calc(100% - var(--container-left));
    height: calc(80% - 10.4rem);
    top: calc(5% + var(--title-height));
    left: var(--container-left);
  }
  @media only screen and (max-width: 525px) {
    left: calc(var(--container-left) / 2);
  }

  // Landscape View
  @media only screen and (max-height: 500px) {
    height: calc(80% - 6.7rem);
  }
  @media only screen and (max-height: 500px) and (min-width: 851px) {
    top: 6rem;
  }
`

const Motto = styled.h2`
  margin: 0;
  margin-top: 2rem;
  padding-right: 2rem;
  font-size: 3.5vmin;
  text-align: left;
  // Mobile view
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 500px) {
    margin-top: 0;
    font-size: 1.65rem;
  }
`

const VideoContainer = styled.div`
  width: 90%;
  max-height: 40rem;
  height 70%;
  min-height: 70%;
  margin: 2rem 0;
  border: 1px dashed var(--black);
  border-radius: 1rem;
  @media only screen and (max-width: 525px) {
    min-height: 25rem;
    width: 100%;
  }
  // Landscape View
  @media only screen and (max-height: 540px) {
    min-height: 67%;
    margin: 1rem 0;
  }
  @media only screen and (max-height: 305px) {
    min-height: 11rem;
  }
`

const HeroesCall = styled.a`
  margin-top: 2rem;
  background-color: var(--blue);
  color: var(--white);
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  border: 0.7rem solid var(--white);
  border-radius: 1rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 3rem;
  }
  &:hover {
    background-color: var(--white);
    border: 1rem solid var(--blue);
    color: var(--blue);
  }
  @media only screen and (max-width: 525px) {
    right: 1rem;
  }
  @media only screen and (max-width: 500px) {
    width: 80%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
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
    border: 0.3rem solid var(--white);
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
                  height: '90%',
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
              {/* <MuxPlayer
                streamType="on-demand"
                playbackId={node.video.asset.playbackId}
                metadata={{
                  video_id: `${node.video.asset.assetId}`,
                  video_title: `Lightning Bundle Introduction`,
                }}
              /> */}
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
