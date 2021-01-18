import React from 'react'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Container>
      Happy CNY from Santavana!
      <img src="/favicon.ico" alt="logo" />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 50px;
`

export default IndexPage
