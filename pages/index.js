import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const IndexPage = () => {
  return (
    <Container style={{ backgroundImage: `url('./background.png')` }}>
      <img
        src="/title.png"
        style={{
          width: 'auto',
          height: '25vh',
          margin: '40px',
        }}
      />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src="/buddha-static.png"
          style={{ width: 'auto', height: '60vh', display: 'block' }}
        />
        <button
          style={{
            position: 'absolute',
            margin: '0 auto',
            bottom: '5%',
            left: 0,
            right: 0,
            width: '30%',
            fontSize: '20px',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        >
          开始 Start
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
`

export default IndexPage
