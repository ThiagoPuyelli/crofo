import type { NextPage } from 'next'
import styled from '@emotion/styled'
import GliderComponent from 'react-glider'
import 'glider-js/glider.min.css'

const CarouselDS: NextPage = () => {
  
  const CarouselStyled = styled.div`
    display: flex;
    flex: row;
    overflow: hidden;
    justify-content: center;
    margin: 30px;
    .buttons {
      display: flex;
      flex-flow: row wrap;
      position: absolute;
      justify-content: space-between;
      z-index: 2;
      width: 420px;
      height: 500px;
      button {
        transition: 300ms all;
        background: none;
        border: none;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .iframes {
      display: flex;
      flex-flow: row wrap;
      height: 500px;
      width: 350px;
      margin: 0px auto;
      position: absolute;
      .iframesContent {
        position: absolute;
        transition: 300ms all;
        display: flex;
        flex-flow: row wrap;
        max-width: 2000px;
        margin-left: 0px;
        .iframeds.first {
          margin-left: 0px;
        }
        .iframeds {
            margin-left: 30px;
        }
      }
    }
    .pages {
      position: absolute;
      z-index: 3;
      margin-top: 500px;
      cursor: pointer;
      .page.page1 {
        color: black;
      }
      .page {
        background: none;
        border: none;
        font-size: 45px;
        font-weight: bold;
        color: #ccc;
      }
    }
  `

  /*const clickButton = (direction: 'left'|'right') => {
    if (direction === 'left') {
      const page = localStorage.getItem('page')
      if (page) localStorage.setItem('page', (parseInt(page) - 360) + 'px')
      console.log(marginLeft)
      console.log(page)
    } else {
      console.log('pepe')
    }
  }*/

  return (
    <CarouselStyled>
      <GliderComponent
        draggable
        hasArrows
        hasDots
        slidesToShow={2}
        slidesToScroll={1}
      >
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
      </GliderComponent>
    </CarouselStyled>
  )
}

export default CarouselDS

      /*<div className="buttons">
        <button className='leftButton'>{'<'}</button>
        <button className='rightButton'>{'>'}</button>
      </div>
      <div className="iframes">
        <div className="iframesContent">
          <iframe className='iframeds first' src="https://discord.com/widget?id=814798281682059304&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          <iframe className='iframeds' src="https://discord.com/widget?id=814798281682059304&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
      <div className="pages">
        <button className="page page1">.</button>
        <button className="page page2">.</button>
      </div>*/