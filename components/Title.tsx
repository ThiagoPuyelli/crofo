import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import worker from '../public/img/worker.png'

const Title: NextPage = () => {
    const TitleStyled = styled.div`
        .title-sub {
            text-align: center;
            margin-top: 80px;
            margin-bottom: 100px;
            font-size: 30px;
        }

        .title-sub h2 {
            font-size: 20px;
        }

        .divImage {
            display: flex;
            justify-content: center;
            width: 300px;
            margin: 0 auto;
            margin-top: -60px;
            margin-bottom: 100px;
        }

        .img {
            border-radius: 50%;
            margin-top: 20px;
        }
    `
  
    return (
      <TitleStyled>
          <div className="title-sub">
            <h1>Administrador & Desarrollador Web</h1>
            <h2>Administro y programo cosas maravillosamente simples, y me encanta lo que hago.</h2>
          </div>
          <div className="divImage">
            <Image className="img" src={worker} alt="worker"></Image>
          </div>
      </TitleStyled>
    )
  }
  
  export default Title