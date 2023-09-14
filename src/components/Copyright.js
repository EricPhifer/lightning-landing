import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const CopyStyles = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  background-color: var(--black);
  font-weight: 600;
  color: white;

  a {
    color: lightsteelblue;
    &:hover {
      color: steelblue;
    }
  }
  @media only screen and (max-width: 330px) {
    height: 10rem;
  }
`

export default function Copyright() {
  const { foot } = useStaticQuery(graphql`
    query {
      foot: allSanityFooter {
        nodes {
          id
          title
        }
      }
    }
  `)
  const { nodes } = foot

  return (
    <>
      {nodes.map(node => (
        <CopyStyles className="storybrand" key={node.id}>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved {node.title}
          </p>
        </CopyStyles>
      ))}
    </>
  )
}
