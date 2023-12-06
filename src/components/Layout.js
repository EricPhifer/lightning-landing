import { Script } from 'gatsby'
import 'normalize.css'
import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Copyright from './Copyright'

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  .copyright {
    bottom: -10rem;
  }
`

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        {children}
        <Copyright />
      </SiteStyles>
      <Script>
        {(function () {
          function saLoadedLinkEvents() {
            document
              .querySelectorAll('a[data-sa-link-event]')
              .forEach(element => {
                const href = element.getAttribute('href')
                const eventName = element.getAttribute('data-sa-link-event')
                if (!href || !window.sa_event || !window.sa_loaded) return

                element.addEventListener('click', event => {
                  const target = element.getAttribute('target')
                  if (target === '_blank') {
                    event.preventDefault()
                    window.sa_event(eventName, () => {
                      window.location.href = href
                    })
                    return false
                  }
                  window.sa_event(eventName)
                  return true
                })
              })
          }

          if (
            document.readyState === 'ready' ||
            document.readyState === 'complete'
          ) {
            saLoadedLinkEvents()
          } else {
            document.addEventListener('readystatechange', event => {
              if (event.target.readyState === 'complete') saLoadedLinkEvents()
            })
          }
        })()}
      </Script>
    </>
  )
}
