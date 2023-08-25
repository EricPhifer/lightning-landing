import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Flex = styled.section`
  height: 100%;
  margin: 2rem auto;
  display: inline-flex;
  gap: 1rem;
  justify-content: center;
`

const Item = styled.a`
  width: 5rem;
  height: 5rem;
  position: relative;
  border-radius: 0.5rem;
  @media only screen and (max-width: 900px) {
    margin-bottom: 5rem;
  }
`

const Title = styled.h3`
  font-size: 2.4rem;
  text-shadow: 0.1rem 0 0 var(--gray), -0.1rem 0 0 var(--gray),
    0 0.1rem 0 var(--gray), 0 -0.1rem 0 var(--gray);
`

export default function Social() {
  const { social } = useStaticQuery(graphql`
    query {
      social: allSanitySocial {
        nodes {
          id
          title
          alt
          link
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
  const { nodes } = social
  return (
    <Container>
      <Title>Connect with Us</Title>
      <Flex>
        {nodes.map(node => (
          <Item href={node.link} rel="noopener" target="_blank" key={node.id}>
            <SanityImage
              {...node.image}
              alt={node.alt}
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </Item>
        ))}
      </Flex>
    </Container>
  )
}
