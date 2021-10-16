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
      color: #7289da;
      transition: 300ms all;
    }
    .swiper-button-next:hover {
      text-shadow: 0px 0px 4px #7289da;
    }
    .swiper-button-prev {
      color: #7289da;
      transition: 300ms all;
    }
    .swiper-button-prev:hover {
      text-shadow: 0px 0px 4px #7289da;
    }
    @media(max-width:978px) {
      
    }
  `

  return (
    <CarouselStyled>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, A11y]}
        navigation
        draggable={false}
        slidesPerView={3}
      >
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=814798281682059304&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=411615677678616607&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=805854905591922718&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=870993545459277825&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=543134025464676353&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=338814044813131780&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='iframeDiv'>
            <h3>Discord</h3>
            <iframe src="https://discord.com/widget?id=331552260108713987&theme=dark" width="250" height="350" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </SwiperSlide>
      </Swiper>
    </CarouselStyled>
  )
}

export default CarouselDS