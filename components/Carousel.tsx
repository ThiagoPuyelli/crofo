import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import styled from '@emotion/styled'

const CarouselDS: NextPage = () => {
  const CarouselStyled = styled.div`
    margin: 0px auto;
    width: 80%;
    .iframeDiv {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
    .swiper-button-next {
      color: #7510F7;
      transition: 300ms all;
    }
    .swiper-button-next:hover {
      text-shadow: 0px 0px 4px #7510F7;
    }
    .swiper-button-prev {
      color: #7510F7;
      transition: 300ms all;
    }
    .swiper-button-prev:hover {
      text-shadow: 0px 0px 4px #7510F7;
    }
    .divTitle {
      text-align: center;
      color: #000;
      font-size: 20px;
      margin-top: 250px;
    }
  `

  return (
    <CarouselStyled>
      <div className="divTitle">
        <h1>Servidores en los que trabajo</h1>
      </div>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, A11y]}
        navigation
        draggable={false}
        slidesPerView={3}
      >
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>🍉 | SG Community.</h3>
            <p>Miembros: 61K</p>
            <iframe src="https://discord.com/widget?id=411615677678616607&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#StayWyger</h3>
            <p>Miembros: 149</p>
            <iframe src="https://discord.com/widget?id=805854905591922718&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>King Discord</h3>
            <p>Miembros: 24K</p>
            <iframe src="https://discord.com/widget?id=870993545459277825&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>#BeAKnight</h3>
            <p>Miembros: 878</p>
            <iframe src="https://discord.com/widget?id=543134025464676353&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Dr Igo Discord</h3>
            <p>Miembros: 3K</p>
            <iframe src="https://discord.com/widget?id=338814044813131780&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Papitalandia</h3>
            <p>Miembros: 12K</p>
            <iframe src="https://discord.com/widget?id=331552260108713987&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </CarouselStyled>
  )
}

export default CarouselDS