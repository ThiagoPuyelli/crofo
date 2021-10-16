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
    border-bottom: 2px solid #7510F7;
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
          <a href='#'>Skills</a>
        </li>
        <li className='linkHeader'>
          <a href='#'>Proyectos</a>
        </li>
        <li className='linkHeader'>
          <a href='#'>Contacto</a>
        </li>
      </ul>
    </HeaderStyled>
  )
}

export default Header
