import { useState, useEffect } from "react";
import Button from "../components/Button";
import Logo from "../assets/img/logo.svg";
import Menu from "../assets/img/Menu.svg";
import Close from "../assets/img/close.svg";
import HeroRectangleOne from "../assets/img/retangleOne.png";
import HeroRectangleTwo from "../assets/img/retangleTwo.png";
import chat from "../assets/img/chat.png";
import people from "../assets/img/people.png";
import money from "../assets/img/money.png";

import "../styles/buttons.css";
import "../styles/content1.css";
import "../styles/content2.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/home.css";
import "../styles/main.css";
import "../styles/utility.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import EmailSender from '../components/EmailSender';

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  });

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo PetStatus" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg link" href="#">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
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
            Comida de mãe direto no seu apê, é só pedir que entregamos para
            você!
          </h1>

          <p>
            Já pensou em matar a saudade daquela comida caseira? O melhor de
            tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <div className="project-content">
        <h1>Sobre nosso Produto!</h1>
        <div className="cards">
          <div className="card">
            <img src={chat} alt="chat" className="icon-card" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis odit harum voluptate itaque ipsa, nam labore eius velit
              obcaecati consequatur natus ut quis suscipit fugiat laudantium,
              cum quisquam soluta vero!
            </p>
          </div>
          <div className="card">
            <img src={people} alt="people" className="icon-card" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet, reprehenderit eius dolorum earum voluptate ad. In
              praesentium error cupiditate. Repellendus atque ratione rerum fuga
              commodi incidunt quas tenetur nobis.
            </p>
          </div>
          <div className="card">
            <img src={money} alt="money" className="icon-card" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              error! Ratione fugit non iusto, repudiandae voluptatem dolore
              temporibus maiores rerum sunt odio, suscipit rem molestiae atque,
              itaque sint eveniet veritatis!
            </p>
          </div>
        </div>
      </div>

      <section id="testimonials">
        <header>
            <span>
                <p className="desktop-only">
                    Conselho de quem conhece
                </p>
                <h2>Cada cliente importa!</h2>
            </span>
            <p>
                Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
            </p>
        </header>

        <section className="carousel">

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
              <span className="testimony">
                  <p>
                      Certamente o mercado chinês de eletricos está bombando, só existe
                      uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                  </p>
              </span>
              <span className="rating">
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                  <p>Ellon Ma</p>
                  <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
              <span className="testimony">
                  <p>
                      Certamente o mercado chinês de eletricos está bombando, só existe
                      uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                  </p>
              </span>
              <span className="rating">
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                  <p>Ellon Ma</p>
                  <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>

          <div className="carousel-content">
            <div className="carousel-card">
              <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
              <span className="testimony">
                  <p>
                      Certamente o mercado chinês de eletricos está bombando, só existe
                      uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                  </p>
              </span>
              <span className="rating">
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                  <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
              </span>
              <span className="names">
                  <p>Ellon Ma</p>
                  <p>CEO BING CHILLING</p>
              </span>
            </div>
          </div>

        </section>

      </section>

      <section id="pricing" className="container">
        <header>
            <p className="desktop-only">Planos e preços</p>
            <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1.5">

          <div className="pricing-card not-premium">
            <span className="plan">
                <h3>Básico</h3>
                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
            </span>
              <h2>Grátis</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" /><span className="features">
                <img src={"Check"} alt="ícone check" width={24} height={24} />
                <p>Retire na loja</p>
            </span>
            <ul className="features">
                <li>
                  <img src={"Check"} alt="ícone check" width={24} height={24} />
                  <p>Apenas 1 por CPF</p>
                </li>
            </ul>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
                <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
                <h3>Premium</h3>
                <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
            </span>
            <span className="price">
                <h2>R$ 89,90</h2>
                <p>/mês</p>
            </span>
            <Button text="Pedir agora" key="premium" />
            <span className="hr" />
            <span className="features">
                <img src={"Check"} alt="ícone check" width={24} height={24} />
                <p>2 Entregas</p>
            </span>
            <span className="features">
                <img src={"Check"} alt="ícone check" width={24} height={24} />
                <p>5 Refeições por semana</p>
            </span>
            <span className="features">
                <img src={"Check"} alt="ícone check" width={24} height={24} />
                <p>2 Sucos por semana</p>
            </span>
          </div>

          <div className="pricing-card not-premium">
            <span className="plan">
                <h3>Básico</h3>
                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
            </span>
              <h2>Grátis</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" /><span className="features">
                <img src={"Check"} alt="ícone check" width={24} height={24} />
                <p>Retire na loja</p>
            </span>
            <ul className="features">
                <li>
                  <img src={"Check"} alt="ícone check" width={24} height={24} />
                  <p>Apenas 1 por CPF</p>
                </li>
            </ul>
          </div>

        </section>
      </section>

      <div className="contact">
        <div className="info">
          <span>Envie sua dúvida</span>
          <h2>Entre em Contato</h2>
          <p>
            Entre me contato, estamos dispostos a tirar qualquer dúvida, seja um
            orçamento, uma dúvida tecnica de alguns dos nosso produtos.
          </p>
          <p>Estamos a disposição para responder!</p>
        </div>

        <EmailSender/>
      </div>

      <footer>
        <div className="footer-div">
          <div className="logos">
            <span>LogoMarca</span>
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="recurso">
            <div className="empresas">
              <h2>Empresa</h2>
              <a href="">Sobre nós</a>
              <a href="">Faça parte do time</a>
              <a href="">Blog</a>
            </div>
            <div className="funcionalidades">
              <h2>Funcionalidade</h2>
              <a href="">Marketing</a>
              <a href="">Análise de Dados</a>
              <a href="">Boot Discord</a>
            </div>
            <div className="recursos">
              <h2>Recursos</h2>
              <a href="">IOS & Android</a>
              <a href="">Teste a Demo</a>
              <a href="">Clientes</a>
              <a href="">API</a>
            </div>
          </div>
        </div>
        <p className="final-span">Feito com muito amor nas aulas de Programação Web S2 @2024 PetStatus - Todos os direitos reservados!</p>
      </footer>
    </>
  );
}
