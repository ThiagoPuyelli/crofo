import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Carousel from '../components/Carousel'

const Home: NextPage = () => {
  const HomeStyled = styled.div`
  `
  
  return (
    <HomeStyled>
      <Carousel />
    </HomeStyled>
  )
}

export default Home
