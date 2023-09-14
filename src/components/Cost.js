import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'
import Cta from './Cta'

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

const CostContainer = styled.div`
  display: inline-flex;
  align-self: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-flow: column wrap;
  }
`

const CostAmt = styled.p`
  margin: 3rem 1rem 2rem;
  padding: 2.5rem !important;
  border: 0.3rem solid var(--white);
  border-radius: 2rem;
  background-color: var(--blue);
  text-align: center;
  font-size: 3rem !important;
`

const Or = styled.p`
  align-self: center;
`

const Break = styled.br``

export default function Cost() {
  const { cost } = useStaticQuery(graphql`
    query {
      cost: allSanityCost {
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
  const { nodes } = cost
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
            <CostContainer>
              <CostAmt>
                $3,497 <Break /> one-time
              </CostAmt>
              <Or>or</Or>
              <CostAmt>
                $697 <Break /> for 6 mo.
              </CostAmt>
            </CostContainer>
            <PortableText
              value={node._rawContent}
              components={defaultComponents}
            />
            <Cta />
          </Container>
        </Section>
      ))}
    </>
  )
}
