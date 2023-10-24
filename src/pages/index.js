import { Script } from 'gatsby'
import * as React from 'react'
import { PiCaretRight } from 'react-icons/pi'
import styled from 'styled-components'
import Seo from '../components/Seo'
// Hero
import Hero from '../components/Hero'
import Plan from '../components/Plan'
// Contact form
import BundleSubscription from '../components/BundleSubscription'
import Clarity from '../components/Clarity'
import Contentmanage from '../components/Contentmanage'
import Cost from '../components/Cost'
import Maintenance from '../components/Maintenance'
import Problem from '../components/Problem'
import Should from '../components/Should'
import ShouldNot from '../components/ShouldNot'
import useContact from '../utils/useContact'
import useForm from '../utils/useForm'

const HeroStyles = styled.div`
  height: 100dvh;
  @media only screen and (max-width: 500px) {
    height: 80dvh;
  }
`

const Main = styled.main`
  width: 100vw;
  height: 100%;
  padding-bottom: 4rem;
  @media only screen and (max-width: 330px) {
    padding-bottom: 10rem;
  }
`

const LightBlock = styled.section`
  width: 100%;
  min-height: 25rem;
  padding: 5rem 2rem;
  color: var(--black);
  p {
    color: var(--black);
  }
`

const DarkBlock = styled.section`
  width: 100%;
  min-height: 50rem;
  padding: 5rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--white);
  #nav-dots {
    background: var(--white);
    &:hover {
      background: var(--blue);
    }
    &:active {
      border: 0.1rem dotted var(--blue);
    }
    &:focus {
      background: var(--blue);
    }
    &[aria-current='page'] {
      background: var(--blue);
    }
  }
  input,
  textarea {
    color: var(--white);
  }
`

const WhiteSpace = styled.div`
  width: 80%;
  max-width: 98rem;
  margin: 10rem auto;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`

const Form = styled.form`
  max-width: 80rem;
  width: 100%;
  margin: 2rem auto;
  transition: 0.5s all ease;
  display: flex;
  flex-flow: column nowrap;
  label {
    display: none;
  }
  input,
  textarea {
    font-size: 2.5rem;
    &:focus {
      border: 0.2rem dotted var(--gray);
    }
  }
  legend {
    width: 98%;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
    @media only screen and (max-width: 350px) {
      font-size: 3rem;
    }
  }
  button {
    align-self: end;
  }
`

const InlineField = styled.fieldset`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 1rem;
  border: none;
  input {
    width: 100%;
    padding: 1rem;
    border: 0.2rem inset var(--lightgray);
    border-radius: 1.5rem;
    background: transparent;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
  }
  @media only screen and (max-height: 750px) {
    margin-bottom: 1rem;
    a,
    button {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }
`

const FullField = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: 1;
  padding: 0;
  border: none;
  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 0.2rem inset var(--lightgray);
    border-radius: 1.5rem;
    background: transparent;
  }
  textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 0.2rem inset var(--lightgray);
    border-radius: 1.5rem;
    background: transparent;
  }
`

const Submit = styled.button`
  width: 20rem;
  margin-bottom: 5rem;
  padding: 1.5rem;
  background: var(--blue);
  color: var(--white);
  border: 0.2rem solid var(--white);
  border-radius: 1rem;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--white);
    border: 0.2rem solid var(--blue);
    color: var(--blue);
  }
  &:focus {
    border: 0.2rem dotted var(--gray);
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`

const Paragraph = styled.p`
  font-size: 3rem;
`

export default function IndexPage() {
  const { values, updateValue } = useForm({
    contactname: '',
    businessname: '',
    email: '',
    message: '',
  })
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  })
  console.log(contact, error, loading, submitContact)
  if (errMessage) {
    return <p>{errMessage}</p>
  }
  return (
    <>
      <HeroStyles id="top">
        <Hero />
      </HeroStyles>
      <Main>
        <DarkBlock>
          <WhiteSpace>
            <Plan />
          </WhiteSpace>
        </DarkBlock>

        <LightBlock>
          <WhiteSpace>
            <Problem />
          </WhiteSpace>
        </LightBlock>

        <DarkBlock>
          <WhiteSpace>
            <Clarity />
          </WhiteSpace>
        </DarkBlock>

        <LightBlock>
          <WhiteSpace>
            <Maintenance />
          </WhiteSpace>
        </LightBlock>

        <DarkBlock>
          <WhiteSpace>
            <Cost />
          </WhiteSpace>
        </DarkBlock>

        <LightBlock>
          <WhiteSpace>
            <Should />
          </WhiteSpace>
        </LightBlock>

        <DarkBlock>
          <WhiteSpace>
            <ShouldNot />
          </WhiteSpace>
        </DarkBlock>

        <LightBlock>
          <WhiteSpace>
            <Paragraph>
              No worries! We will contact you when new bundles come out that
              include more website features:
            </Paragraph>
            <BundleSubscription />
          </WhiteSpace>
        </LightBlock>

        <DarkBlock>
          <WhiteSpace>
            <Contentmanage />
          </WhiteSpace>
        </DarkBlock>

        <LightBlock>
          <WhiteSpace>
            <Form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <legend>More Questions? We're happy to help.</legend>
              <InlineField className="emailPhone">
                <label htmlFor="contactname">Contact Name</label>
                <input
                  type="text"
                  name="contactname"
                  id="contactname"
                  value={values.contactname}
                  onChange={updateValue}
                  placeholder="Contact Name"
                />
                <label htmlFor="businessname">Business Name</label>
                <input
                  type="text"
                  name="businessname"
                  id="businessname"
                  value={values.businessname}
                  onChange={updateValue}
                  placeholder="Business Name"
                />
              </InlineField>
              <FullField className="nameEmail">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={updateValue}
                  placeholder="Email Address"
                />
              </FullField>
              <FullField className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={updateValue}
                  rows="3"
                  placeholder="Your Question"
                />
              </FullField>
              <Submit type="submit" value="Submit">
                Submit <PiCaretRight />
              </Submit>
            </Form>
          </WhiteSpace>
        </LightBlock>
      </Main>
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Lightning Fast Precision Websites" />
