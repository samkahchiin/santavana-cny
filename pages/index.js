import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const IndexPage = () => {
  return (
    <Container style={{ backgroundImage: `url('./background.png')` }}>
      <img src="/buddha-static.png" style={{ width: 'auto', height: '60vh' }} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
`

export default IndexPage
