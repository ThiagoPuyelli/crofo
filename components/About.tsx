import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'

const About: NextPage = () => {
    const AboutStyled = styled.div`
        .divAbout {
          background-color: #7510F7;
          width: 100%;
        }

        .titleH3 {
          color: #fff;
          text-align: center;
          padding-top: 130px;
          font-size: 30px;
        }

        .subP {
          text-align: center;
          margin-top: 40px;
          font-size: 26px;
          color: white;
          margin-bottom: 200px;
        }

        .container-skills {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          margin-top: 60px;
          background-color: white;
          border-radius: 50px 50px 0px 0px;
          padding-top: 100px;
          height: auto;
          div {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0px 0px 4px var(--violeta);
            border: 3px solid var(--violeta);
            margin-top: 10px;
          }
        }

        .icon {
          color: #000;
          font-size: 45px;
        }

        .titleH2 {
          color: #000;
        }

        .paragraph {
          font-size: 18px;
          margin-top: 20px;
          word-spacing: 0px;
          line-height: 30px;
          width: 350px;
          color: #000;
        }

        .sectionP {
          font-size: 20px;
          font-weight: 700;
        }

        .sectionLanguages {
          font-size: 17px;
          color: #000;
        }

        .sectionH {
          font-size: 20px;
          font-weight: 700;
        }

        .sectionList {
          color: #000;
        }
        @media (max-width: 422px) {
          .container-skills div {
            width: 95%;
          }
          .container-skills div * {
            width: 100%;
          }
        }
    `
  
    return (
      <AboutStyled>
          <div className="divAbout" id="sobre-mi">
              <h3 className="titleH3">Hola, soy Crofo. Un placer conocerte.</h3>
              <p className="subP">Actualmente vivo en Argentina, me considero desarrollador Frontend ya que manejo sus principales tencologias. Ademas estoy aprendiendo nuevas librerias como react y angular para poder aumentar mi conocimiento.</p>
            <div className="container-skills">
              <div>
                <FontAwesomeIcon className="icon" icon={faDiscord}/>
                <h2 className="titleH2">Discord Community Manager</h2>
                <p className="paragraph">Desarrollo páginas web y aplicaciones modernas utilizando las técnicas y herramientas de desarrollo front-end. Creo que todos los productos deben construirse con un fuerte enfoque en la accesibilidad, el rendimiento y la interacción del usuario.</p>
                <p className="sectionP">Lenguajes con los que desarrollo:</p>
                <p className="sectionLanguages">Html, Css, Js, Bootstrap</p>
                <p className="sectionH">Herramientas de desarrollador:</p>
                <ul className="sectionList">
                  <li>Google</li>
                  <li>CodePen</li>
                  <li>Visual Studio</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faDiscord}/>
                <h2 className="titleH2">Front-End developer</h2>
                <p className="paragraph">Creo servidores de discord desde cero implementando un sistema de canales, roles y bots organizados con los permisos que desee el cliente. Ademas desarrollo bots con node.js desde cero con los comandos para poder administrar el servidor.</p>
                <p className="sectionP">Lenguajes con los que desarrollo:</p>
                <p className="sectionLanguages">Html, Css, Js, Bootstrap</p>
                <p className="sectionH">Herramientas de desarrollador:</p>
                <ul className="sectionList">
                  <li>Google</li>
                  <li>CodePen</li>
                  <li>Visual Studio</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faDiscord}/>
                <h2 className="titleH2">Desarrollador Web</h2>
                <p className="paragraph">Realmente me preocupo por la gente y me encanta ayudar a otros programadores que tienen errores o que son nuevos. Ademas estoy escribiendo algunos libros para poder aprender cosas importantes sobre la programación.</p>
                <p className="sectionP">Lenguajes con los que desarrollo:</p>
                <p className="sectionLanguages">Html, Css, Js, Bootstrap</p>
                <p className="sectionH">Herramientas de desarrollador:</p>
                <ul className="sectionList">
                  <li>Google</li>
                  <li>CodePen</li>
                  <li>Visual Studio</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
          </div>
      </AboutStyled>
    )
  }
  
  export default About