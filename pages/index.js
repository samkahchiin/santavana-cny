import React from 'react'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Container style={{backgroundImage: `url('./web.jpeg')`}} />
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`

export default IndexPage
