import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 192rem;
  height: 100%;
  margin: 2rem 0;
  position: relative;
  display: inline-flex;
  z-index: 0;
  img {
    width: 30rem;
    height: 30rem;
    border-radius: 5rem;
  }
  #cta {
    align-self: end;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column wrap;
    img {
      align-self: center;
      margin-bottom: 2rem;
    }
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const Container = styled.div`
  width: 100%;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  p {
    padding: 1rem 0;
    font-size: 2.4rem;
  }
  ul {
    font-size: 2rem;
    list-style-type: circle;
    li {
      margin: 0.5rem 0 0.5rem 0.5rem;
    }
  }
  // Mobile view
  @media only screen and (max-width: 900px) {
    margin-left: 0;
  }
  @media only screen and (max-width: 750px) {
    height: 90%;
    p {
      font-size: 2rem;
    }
  }
  @media only screen and (max-height: 500px) {
    height: calc(100% - 15rem);
  }
`

const Title = styled.h3`
  font-size: 3rem;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);
  @media only screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`

const Paragraph = styled.p`
  font-size: 3rem;
`

export default function ShouldNot() {
  const { shouldnot } = useStaticQuery(graphql`
    query {
      shouldnot: allSanityShouldnot {
        nodes {
          id
          title
          link
          _rawContent
          alt
          source
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
  const { nodes } = shouldnot
  return (
    <>
      {nodes.map(node => (
        <Section key={node.id}>
          {node.image ? (
            <SanityImage
              {...node.image}
              alt={node.alt}
              style={{
                backgroundImage: 'fixed',
                objectFit: 'contain',
                auto: 'format',
              }}
            />
          ) : (
            <div />
          )}
          <Container>
            <Title>{node.title}</Title>
            <PortableText
              value={node._rawContent}
              components={defaultComponents}
            />
          </Container>
        </Section>
      ))}
      <Paragraph>
        But wait... I am still interested in a lightning-fast website, I just
        need a little more...
      </Paragraph>
    </>
  )
}
