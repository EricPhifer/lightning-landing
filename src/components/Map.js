import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-flex;
  font-size: 2.4rem;
  padding: 2rem 0;
  a {
    font-size: 2.4rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% + 10rem);
  }
`

const MapIframe = styled.iframe`
  width: 100%;
  border: 0;
`

export default function Map() {
  return (
    <Section>
      <MapIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417915.93682418804!2d-107.00611883720494!3d35.082525883256025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220cc2ec4cc0d7%3A0x834d2f258af370a2!2sABQ%20BioPark%20Zoo!5e0!3m2!1sen!2sus!4v1692965244906!5m2!1sen!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Section>
  )
}
