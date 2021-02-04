import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './shared/Button'
import yaml from '../data/text.yml'

const PRIMARY_COLOR = '#E0A91A'
const SECONDARY_COLOR = '#FFF6E0'
const TERTIARY_COLOR = '#695237'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  overflow: 'hidden',
}

const StepZero = ({ clickStart }) => (
  <div
    style={{
      ...containerStyle,
      backgroundImage: `url('./background_0.png')`,
      justifyContent: 'space-between',
    }}
  >
    <img
      src="/title.png"
      style={{
        width: 'auto',
        height: '25vh',
        margin: '40px',
      }}
    />
    <div style={{ marginBottom: '20pt' }}>
      <Button btnText="开始 Start" onClick={clickStart} />
    </div>
  </div>
)

const StepOne = ({ setLanguage, setStep }) => {
  return (
    <div
      style={{
        ...containerStyle,
        backgroundImage: `url('./background_1.png')`,
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          marginBottom: '20pt',
          fontSize: '14pt',
          borderRadius: '10pt',
          border: `solid 2.5pt ${PRIMARY_COLOR}`,
          backgroundColor: SECONDARY_COLOR,

          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '5pt',
        }}
      >
        <p style={{ color: TERTIARY_COLOR, textAlign: 'center' }}>
          選擇語言 Select a language
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            btnText="中文"
            btnStyle={{ margin: '10px auto', flexGrow: 0.3 }}
            onClick={() => {
              setStep(2)
              setLanguage('ch')
            }}
          />
          <Button
            btnText="English"
            btnStyle={{ margin: '10px auto', flexGrow: 0.3 }}
            onClick={() => {
              setStep(2)
              setLanguage('en')
            }}
          />
        </div>
      </div>
    </div>
  )
}

const StepTwo = ({ language, setStep }) => {
  return (
    <div
      style={{
        ...containerStyle,
        backgroundImage: `url('./background_1.png')`,
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          marginBottom: '20pt',
          maxWidth: '170pt',
          fontSize: '14pt',
          borderRadius: '10pt',
          border: `solid 2.5pt ${PRIMARY_COLOR}`,
          backgroundColor: SECONDARY_COLOR,

          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '5pt',
        }}
      >
        <p style={{ color: TERTIARY_COLOR, textAlign: 'center' }}>
          {yaml[language].praying}
        </p>
        <Button btnText={yaml[language].next} onClick={() => setStep(3)} />
      </div>
    </div>
  )
}

const StepThree = ({ language, setStep }) => {
  return (
    <div
      style={{
        ...containerStyle,
        backgroundImage: `url('./background_2.png')`,
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          backgroundColor: 'transparent',
          width: '200px',
          height: '200px',
          marginBottom: '10pt',
        }}
        onClick={() => setStep(4)}
      />
      <div
        style={{
          marginBottom: '20pt',
          maxWidth: '170pt',
          fontSize: '14pt',
          borderRadius: '10pt',
          border: `solid 2.5pt ${PRIMARY_COLOR}`,
          backgroundColor: SECONDARY_COLOR,

          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '5pt',
        }}
      >
        <p style={{ color: TERTIARY_COLOR, textAlign: 'center' }}>
          {yaml[language].basket}
        </p>
      </div>
    </div>
  )
}

const StepFour = ({ language, setStep }) => {
  return (
    <div
      className="container"
      style={{
        ...containerStyle,
        backgroundImage: `url('./background_2.png')`,
        justifyContent: 'flex-end',
      }}
    >
      <img
        src="/angpow.png"
        style={{
          width: 'auto',
          height: '90vh',
          margin: '20pt',
          position: 'relative',
        }}
      />
      <Button
        btnText={yaml[language].open}
        btnStyle={{ position: 'absolute', bottom: '60pt' }}
        onClick={() => setStep(5)}
      />
    </div>
  )
}

const StepFive = ({ language, setStep }) => {
  return (
    <div
      className="container"
      style={{
        ...containerStyle,
        backgroundImage: `url('./background_2.png')`,
        justifyContent: 'flex-end',
      }}
    >
      <img
        src="/angpow-open.png"
        style={{
          width: 'auto',
          height: '90vh',
          margin: '20pt',
          position: 'relative',
        }}
      />
      <Button
        btnText={yaml[language].homepage}
        btnStyle={{ position: 'absolute', bottom: '60pt' }}
        onClick={() => setStep(5)}
      />
      <Button
        btnText={yaml[language].replay}
        btnStyle={{ position: 'absolute', bottom: '60pt' }}
        onClick={() => setStep(5)}
      />
    </div>
  )
}

const Steps = () => {
  const [step, setStep] = useState(0)
  const [language, setLanguage] = useState('ch')

  if (step === 1) {
    return <StepOne setLanguage={setLanguage} setStep={setStep} />
  }

  if (step === 2) {
    return <StepTwo language={language} setStep={setStep} />
  }

  if (step === 3) {
    return <StepThree language={language} setStep={setStep} />
  }

  if (step === 4) {
    return <StepFour language={language} setStep={setStep} />
  }

  //   return <StepZero clickStart={() => setStep(1)} />
  return <StepFive language={language} setStep={setStep} />
}

export default Steps
