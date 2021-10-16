import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Carousel from '../components/Carousel'
import Title from '../components/Title'

const Home: NextPage = () => {
  const HomeStyled = styled.div`
  `
  
  return (
    <HomeStyled>
      <Title/>
      <Carousel />
    </HomeStyled>
  )
}

export default Home
