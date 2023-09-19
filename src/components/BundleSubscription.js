import * as React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 192rem;
  height: 100%;
  margin: 2rem 0;
  position: relative;
  display: inline-flex;
  flex-flow: row-reverse nowrap;
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

const HiddenInput = styled.input`
  display: none;
`

const Label = styled.label`
  display: none;
`

const TextInput = styled.input`
  padding: 1rem;
  border: 0.2rem inset var(--lightgray);
  border-radius: 1.5rem;
  background: transparent;
  @media only screen and (max-height: 750px) {
    font-size: 1.25rem;
  }
`

const Form = styled.form`
  max-width: 80rem;
  width: 100%;
  margin: 2rem auto;
  transition: 0.5s all ease;
  display: flex;
  flex-flow: column nowrap;
  align-self: center;
  label {
    display: none;
  }
  input,
  textarea {
    width: 100%;
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
  }
  button {
    align-self: end;
  }
`

const InlineField = styled.fieldset`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 2rem;
  border: none;
  padding: 0;
  margin-bottom: 2rem;
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
  border: none;
`

const Submit = styled.button`
  width: 100%;
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

const PrivacyPolicy = styled.p`
  text-align: center;
`

export default function BundleSubscription() {
  return (
    <Section>
      <Form
        method="post"
        className="af-form-wrapper"
        acceptCharset="UTF-8"
        action="https://www.aweber.com/scripts/addlead.pl"
      >
        <HiddenInput type="hidden" name="meta_web_form_id" value="377571239" />
        <HiddenInput type="hidden" name="meta_split_id" value="" />
        <HiddenInput type="hidden" name="listname" value="awlist6625549" />
        <HiddenInput
          type="hidden"
          name="redirect"
          value="https://www.aweber.com/thankyou-coi.htm?m=text"
          id="redirect_dce5772c226d5ea6ff1981efdc90e400"
        />
        <HiddenInput
          type="hidden"
          name="meta_adtracking"
          value="Subscribe_for_Bundle_Updates"
        />
        <HiddenInput type="hidden" name="meta_message" value="1" />
        <HiddenInput
          type="hidden"
          name="meta_required"
          value="name,custom Business,email"
        />
        <HiddenInput
          type="hidden"
          name="meta_tooltip"
          value="name||Contact Name,,custom Business||Business Name,,email||Email Address"
        />
        <InlineField>
          <Label htmlFor="awf_field-116273877">Name:</Label>
          <TextInput
            id="awf_field-116273877"
            type="text"
            name="name"
            placeholder="Contact Name"
          />

          <Label htmlFor="awf_field-116273878">Business:</Label>
          <TextInput
            id="awf_field-116273878"
            type="text"
            name="custom Business"
            placeholder="Business Name"
          />
        </InlineField>

        <InlineField>
          <Label htmlFor="awf_field-116273879">Email:</Label>
          <TextInput
            id="awf_field-116273879"
            type="text"
            name="email"
            placeholder="Email Address"
          />

          <Submit type="submit" value="Submit">
            Sign Up <PiCaretRightBold />
          </Submit>
        </InlineField>

        <FullField className="privacyPolicy">
          <PrivacyPolicy>
            We respect your{' '}
            <a
              title="Privacy Policy"
              href="https://www.aweber.com/permission.htm"
              target="_blank"
              rel="nofollow noreferrer"
            >
              email privacy
            </a>
          </PrivacyPolicy>
        </FullField>
      </Form>
    </Section>
  )
}
