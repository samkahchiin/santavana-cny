import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Button from './shared/Button'
import LinkButton from './shared/LinkButton'
import Box from './shared/Box'
import ButtonPair from './shared/ButtonPair'

import yaml from '../data/text.yml'
import quotes from '../data/quotes.data'
import classes from './Steps.module.css'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
}

const StepZero = ({ clickStart }) => (
  <div
    className={classes.Buddha}
    style={{
      ...containerStyle,
      justifyContent: 'space-between',
    }}
  >
    <img className={classes.Title} src="/title.png" />
    <Button
      btnText="開始 Start"
      onClick={clickStart}
      btnStyle={{ marginBottom: '2vh' }}
    />
  </div>
)

const StepOne = ({ setLanguage, setStep }) => (
  <div
    className={classes.BuddhaHigh}
    style={{
      ...containerStyle,
      justifyContent: 'flex-end',
    }}
  >
    <Box>
      <p>
        <span>選擇語言</span>
        <span style={{ fontFamily: 'en' }}> Select a language</span>
      </p>
      <ButtonPair>
        <Button
          btnText="中文"
          onClick={() => {
            setStep(2)
            setLanguage('ch')
          }}
        />
        <Button
          btnText="English"
          onClick={() => {
            setStep(2)
            setLanguage('en')
          }}
        />
      </ButtonPair>
    </Box>
  </div>
)

const StepTwo = ({ language, setStep }) => {
  return (
    <div
      className={classes.BuddhaHigh}
      style={{
        ...containerStyle,
        justifyContent: 'flex-end',
      }}
    >
      <Box>
        <span>{yaml[language].praying}</span>
        <span style={{ fontWeight: 'bold' }}>
          {yaml[language].praying_charm}
        </span>
        <span>{yaml[language].praying_advise}</span>
        <Button btnText={yaml[language].next} onClick={() => setStep(3)} />
      </Box>
    </div>
  )
}

const StepThree = ({ language, setStep }) => {
  return (
    <div
      className={classes.BuddhaShine}
      style={{
        ...containerStyle,
        justifyContent: 'flex-end',
      }}
    >
      <div
        className={classes.TransparentBasketBox}
        onClick={() => setStep(4)}
      />
      <Box>
        <p>{yaml[language].basket}</p>
      </Box>
    </div>
  )
}

const StepFour = ({ language, setStep }) => {
  return (
    <div
      className={classes.Blur}
      style={{
        ...containerStyle,
      }}
    >
      <div className={classes.AngpauPacket}>
        <Button
          btnText={yaml[language].open}
          className={[classes.Angpau]}
          onClick={() => setStep(5)}
        />
      </div>
    </div>
  )
}

const StepFive = ({ language, setStep }) => {
  const quoteList = quotes[language]
  const selectedId = Math.floor(Math.random() * 22)

  return (
    <div
      className={classes.Blur}
      style={{
        ...containerStyle,
        justifyContent: 'flex-end',
      }}
    >
      <img src="/angpow-open.png" />

      <div className={classes.QuoteContent}>
        <div className={classes.Quote}>
          <span style={{ fontWeight: 'bold' }}>
            {quoteList[selectedId].text}
          </span>
          <br />
          <br />
          <span>{quoteList[selectedId].ref_1}</span>
          <br />
          <span>{quoteList[selectedId].ref_2}</span>
        </div>
        <div style={{ marginTop: '5vh' }}>
          <LinkButton
            btnText={yaml[language].homepage}
            redirectLink="https://santavana.org/"
          />
          <Button btnText={yaml[language].replay} onClick={() => setStep(0)} />
        </div>
      </div>
    </div>
  )
}

const StepComponent = ({ step, setLanguage, setStep, language }) => {
  const props = { language, setStep }

  switch (step) {
    case 1:
      return <StepOne setLanguage={setLanguage} setStep={setStep} />
    case 2:
      return <StepTwo {...props} />
    case 3:
      return <StepThree {...props} />
    case 4:
      return <StepFour {...props} />
    case 5:
      return <StepFive {...props} />
    default:
      return <StepZero clickStart={() => setStep(1)} />
  }
}

const Steps = () => {
  const [step, setStep] = useState(0)
  const [language, setLanguage] = useState('ch')

  return (
    <div className={classes.BackgroundHigh} style={{ fontFamily: language }}>
      <StepComponent
        step={step}
        setStep={setStep}
        setLanguage={setLanguage}
        language={language}
      />
    </div>
  )
}

export default Steps
