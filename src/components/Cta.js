import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const Buttonesque = styled.a`
  max-width: 20rem;
  margin-top: 2rem;
  background-color: var(--blue);
  color: var(--white);
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  position: relative;
  border: 0.7rem solid var(--white);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 3rem;
  }
  &:hover {
    background-color: var(--white);
    border: 0.7rem solid var(--blue);
    color: var(--blue);
  }
`

export default function Cta() {
  const { call } = useStaticQuery(graphql`
    query {
      call: allSanityClarity {
        nodes {
          id
          cta
          link
        }
      }
    }
  `)
  const { nodes } = call
  return (
    <>
      {nodes.map(cta => (
        <Buttonesque
          href={cta.link}
          rel="noopener noreferrer"
          target="_blank"
          id="cta"
          data-sa-link-event="cta-link"
          key={nodes.id}
        >
          {cta.cta} <PiCaretRightBold />
        </Buttonesque>
      ))}
    </>
  )
}
