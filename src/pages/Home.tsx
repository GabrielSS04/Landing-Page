import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Logo from '../assets/img/logo.svg';
import Menu from '../assets/img/Menu.svg';
import Close from '../assets/img/close.svg';
import HeroRectangleOne from '../assets/img/retangleOne.png';
import HeroRectangleTwo from '../assets/img/retangleTwo.png';
import chat from '../assets/img/chat.png';
import people from '../assets/img/people.png';
import money from '../assets/img/money.png';
import pets from '../assets/img/pet.png';

import "../styles/buttons.css"
import "../styles/content1.css"
import "../styles/content2.css"
import "../styles/header.css"
import "../styles/hero.css"
import "../styles/home.css"
import "../styles/main.css"
import "../styles/utility.css"

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo PetStatus" width={220} height={80} />
          
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg link" href="#">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#solution">Soluções</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#pricing">Preços</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><a className="reverse-color" href="#">Login</a></li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>
            Comida de mãe direto no seu apê, é só pedir que entregamos para você!
          </h1>
          <p>
            Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
          </p>
          <div className="flex gap-1">
            <span><Button text="Cadastre-se" /></span>
            <span className="desktop-only"><Button text="Veja mais" secondary /></span>
          </div>
        </div>
      </section>

      <div className="project-content">
        <h1>Sobre nosso Produto!</h1>
        <div className="cards">
          <div className="card">
            <img src={chat} alt="chat" className="icon-card" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit harum voluptate itaque ipsa, nam labore eius velit obcaecati consequatur natus ut quis suscipit fugiat laudantium, cum quisquam soluta vero!</p>
          </div>
          <div className="card">
            <img src={people} alt="people" className="icon-card" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet, reprehenderit eius dolorum earum voluptate ad. In praesentium error cupiditate. Repellendus atque ratione rerum fuga commodi incidunt quas tenetur nobis.</p>
          </div>
          <div className="card">
            <img src={money} alt="money" className="icon-card" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, error! Ratione fugit non iusto, repudiandae voluptatem dolore temporibus maiores rerum sunt odio, suscipit rem molestiae atque, itaque sint eveniet veritatis!</p>
          </div>
        </div>
      </div>

      <div>
        <div className="img-bg-content-2">
          <img src={Logo} alt="logo" className="asset-contetn2" />
          <img src={pets} alt="pets" className="pets asset-contetn2" />
        </div>
      </div>
    </>
  );
}
