import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Header: NextPage = () => {
  const HeaderStyled = styled.header`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    width: 100%;
    height: 100px;
    align-items: center;
    border-bottom: 2px solid var(--violeta);
    position: fixed;
    background: white;
    z-index: 3;
    top: 0;
    .logo {
      transition: 300ms all;
    }
    .logo:hover {
      text-shadow: 0px 0px 3px black;
    }
    .linksHeader {
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      .linkHeader {
        margin: 20px;
        font-size: 17px;
        a {
          transition: 300ms all;
          display: block;
        }
        a:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }

    @media (max-width: 672px) {
      padding: 0px;
      height: 80px;
      position: relative;
      .logo {
        width: 100%;
        text-align: center;
      }
      .linksHeader {
        width: 100%;
        justify-content: space-evenly;
        margin: 0px;
        font-size: 20px;
      }
    }

    @media (max-width: 462px) {
      .logo {
        font-size: 15px;
      }
      .linkHeader a {
        margin: 5px;
        font-size: 11.4px;
      }
    }

    @media (max-width: 411px) {
      .linksHeader {
        width: 300px;
        margin: 0 auto;
      }
      .linkHeader a {
        font-size: 18px;
      }
    }
  `

  return (
    <HeaderStyled>
      <div className='logo'>
        <a href='#'>
          <h1>Crofo</h1>
        </a>
      </div>
      <ul className='linksHeader'>
        <li className='linkHeader'>
          <a href='#'>Inicio</a>
        </li>
        <li className='linkHeader'>
          <a href='#sobre-mi'>Sobre Mi</a>
        </li>
        <li className='linkHeader'>
          <a href='#servidores'>Servidores</a>
        </li>
        <li className='linkHeader'>
          <a href='#form'>Contacto</a>
        </li>
      </ul>
    </HeaderStyled>
  )
}

export default Header
