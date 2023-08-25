import { PortableText, defaultComponents } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 100%;
  position: relative;
  z-index: 0;
  img {
    position: absolute;
    @media only screen and (max-height: 400px) {
      top: -5rem;
    }
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  // Mobile view
  @media only screen and (max-width: 750px) {
    height: 90%;
  }
  @media only screen and (max-height: 500px) {
    height: calc(100% - 15rem);
  }
`

const Title = styled.h3`
  margin: 3rem 0;
  font-size: 5rem;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);
  @media only screen and (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

const Step = styled.div`
  margin: 2rem;
  display: inline-flex;
  align-items: center;
  @media only screen and (max-width: 625px) {
    margin-left: 0 !important;
  }
  @media only screen and (max-width: 500px) {
    margin: 2rem 0;
  }
`

const Image = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 2.4rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
  @media only screen and (max-width: 500px) {
    width: 7rem;
    height: 7rem;
    margin-right: 2rem;
    img {
      width: 7rem;
      height: 7rem;
    }
  }
`

const StepWords = styled.div`
  font-size: 2.4rem;
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

export default function PlanWithImage() {
  const { planimg } = useStaticQuery(graphql`
    query {
      planimg: allSanityPlanwithimage {
        nodes {
          id
          title
          stepofplan {
            _key
            alt
            stepnumber
            _rawContent
            image {
              asset {
                id
              }
              ...ImageWithPreview
            }
          }
        }
      }
    }
  `)
  const { nodes } = planimg
  return (
    <>
      {nodes.map(node => (
        <Section key={node.id}>
          <Title>How Does It Work?</Title>
          <Container>
            {node.stepofplan
              .map(step => (
                <Step
                  style={{
                    marginLeft: `calc(7rem * ${step.stepnumber})`,
                  }}
                  key={step._key}
                >
                  <Image>
                    {' '}
                    {step.image ? (
                      <SanityImage
                        {...step.image}
                        alt={step.alt}
                        style={{
                          backgroundImage: 'fixed',
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                      />
                    ) : (
                      <div />
                    )}
                  </Image>
                  <StepWords>
                    <PortableText
                      value={step._rawContent}
                      components={defaultComponents}
                    />
                  </StepWords>
                </Step>
              ))
              .sort()}
          </Container>
        </Section>
      ))}
    </>
  )
}
