import * as React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const Buttonesque = styled.a`
  width: 20rem;
  margin-top: 4rem;
  background-color: var(--ctaback);
  color: var(--ctafore);
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: var(--ctafore);
    color: var(--ctaback);
  }
`

export default function Map() {
  return (
    <Buttonesque
      href="https://ericphifer.com/contact"
      rel="noopener noreferrer"
      target="_blank"
      id="cta"
    >
      Give Now <PiCaretRightBold />
    </Buttonesque>
  )
}
