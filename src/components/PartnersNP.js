import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 20rem;
  display: flex;
  margin: 5rem 0;
`

const Logos = styled.ol`
  max-width: 80rem;
  display: flex;
  align-items: center;
  // overflow-x: auto;
  // overflow-y: hidden;
  // scroll-snap-type: x mandatory;
  // scroll-behavior: smooth;
  // li {
  //   scroll-snap-align: center;
  //   scroll-snap-stop: always;
  // }
  // &::-webkit-scrollbar {
  //   width: 1rem;
  //   height: 1rem;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background: var(--black);
  //   border-radius: 1rem;
  // }
  // &::-webkit-scrollbar-track {
  //   background: transparent;
  // }
  // &::marker {
  //   position: absolute;
  //   top: 0;
  // }
`

const Logo = styled.li`
  width: 100%;
  max-height: 25rem;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  justify-items: center;
  // overflow-x: auto;
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

const Image = styled.a`
  img {
    padding: 0 2rem;
    mix-blend-mode: plus-lighter;
  }
`

export default function Partners() {
  const { partners } = useStaticQuery(graphql`
    query {
      partners: allSanityPartners {
        nodes {
          id
          alt
          name
          source
          link
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
  const { nodes } = partners
  return (
    <Section id="carousels-logo" aria-label="Logo Gallery">
      <Grid>
        {nodes.map((node, index) => (
          <Logos className="logos" key={node.id}>
            <Logo className="logo" id={`#logo[${index}]`}>
              <Image href={node.link} rel="noopener" target="_blank">
                <SanityImage
                  {...node.image}
                  alt={node.alt}
                  style={{
                    width: '30rem',
                    height: '30rem',
                    objectFit: 'contain',
                    auto: 'format',
                  }}
                />
              </Image>
            </Logo>
          </Logos>
        ))}
      </Grid>
    </Section>
  )
}
