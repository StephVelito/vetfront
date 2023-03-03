import "./estilo.css";
import "./estilos.css";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import imagen1 from "./img/img-dog-1.jpg";
import imagen2 from "./img/img-dog-2.jpg";
import imagen3 from "./img/img-dog-3.webp";
import imagen4 from "./img/prueba.png";
import imagen5 from "./img/perritocomputadora.png";
import imagen6 from "./img/shield.svg";
import imagen7 from "./img/search.svg";
import imagen8 from "./img/police.png";
import imagen9 from "./img/camera.svg";
import imagen10 from "./img/plus.svg";
import imagen11 from "./img/user.svg";
import imagen12 from "./img/arrow.svg";
import imagen13 from "./img/arrow.svg";
import imagen14 from "./img/arrow.svg";
import imagen15 from "./img/11-10.jpg";
import imagen16 from "./img/4800_10_09.jpg";
import imagen17 from "./img/facebook.svg";
import imagen18 from "./img/instagram.svg";
import imagen19 from "./img/whatsapp.svg";
import imagen20 from "./img/top.png";
const Home2 = () => {
  (function () {
    const titleQuestions = [...document.querySelectorAll(".questions__title")];
    console.log(titleQuestions);

    titleQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        question.children[0].classList.toggle("questions__arrow--rotate");
        addPadding.classList.toggle("questions__padding--add");

        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
      });
    });
  })();

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imagen1}
              id="imagen"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen2}
              id="imagen3"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen3}
              id="imagen4"
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="todo">
        <div className="contenedor2">
          <div className="bene">
            <div className="ben">
              <h1 className="beneficios">
                LA MEJOR OPCION PARA TU
                <span>
                  {" "}
                  MASCOTA<span className="ta"></span>
                </span>
              </h1>
            </div>
            <div className="parrafo">
              DOG LOVER es una veterinaria dedicada a cuidar de tu mascota en
              los momentos mas dificiles con las{" "}
              <span>medidas de seguridad</span> adecuadas para que tu engreido
              este siempre saludable.
            </div>
            <Button
              className="boton m-auto"
              component={Link}
              to="/cites"
              color="secondary"
            >
              {" "}
              Reservar cita{" "}
            </Button>
          </div>

          <div>
            <img src={imagen4} alt="" width="300px" height="300px" />
          </div>

          <div className="content ">
            <ul className="top">
              <li className="top.1">
                {" "}
                <span className="span1">1 COMPAÑIA </span>{" "}
                <h1 className="formal">FORMAL</h1>
              </li>
              <li className="top.1">
                <span className="span1">1 COMUNIDAD </span>
                <h1 className="formal">DE VETERINARIOS CAPACITADOS</h1>
              </li>
              <li className="top.1">
                <span className="span1">1 EQUIPO </span>{" "}
                <h1 className="formal">ENFOCADO EN CUIDAR A TU ENGREIDO</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="contenedor8">
          <h1 className="beneficio">
            Como <span>Funciona</span>
          </h1>
        </div>
        <div className="container__function">
          <div className="container__picture">
            <img src={imagen5} alt="" className="c__picture" />
          </div>
          <div className="container__list">
            <div className="container__item">
              <div className="number">1</div>
              <div className="tem">
                Registrate con nosotros y nos pondremos en contacto contigo
              </div>
            </div>
            <div className="container__item">
              <div className="number">2</div>
              <div className="tem">
                Podras registrar una cita para definir el horario y el servicio
                que requieras.
              </div>
            </div>
            <div className="container__item">
              <div className="number">3</div>
              <div className="tem">
                Recibiras un mensaje de confirmacion con la fecha y hora de la
                cita via email.
              </div>
            </div>

            <div className="container__item">
              <div className="number">4</div>
              <div className="tem">
                Podras calificar la atencion recibida dependiendo tu nivel de
                satisfacción
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="contenedor3">
          <h1 className="beneficio">
            Nuestros <span>Beneficios</span>
          </h1>
        </div>
      </div>
      <div className="benefits">
        <section className="card11">
          <img src={imagen6} alt="" />
          <h1>
            En DogLover contamos con <span>personal capacitado</span>, de esta
            forma podemos garantizar la segura atencion de tu mascotaa{" "}
          </h1>
        </section>
        <section className="card1">
          <img src={imagen7} alt="" />
          <h1>
            {" "}
            Nuestros colaboradores cuentan con un examen psicologico laboral
            aprobado enfocado en encontrar a las personas idoneas para cuidar a
            tu engreido.
          </h1>
        </section>
        <section className="card11">
          <img src={imagen8} alt="" />
          <h1>
            En DogLover realizamos{" "}
            <span>los filtros de antecedentes policales</span> lo cual nos
            permite asegurar que nuestros colaboradores son personas aptas para
            brindar una experiencia segura
          </h1>
        </section>
        <section className="card1">
          <img src={imagen9} alt="" />
          <h1>
            Nuestro establecimiento cuenta con cámaras de seguridad los cuales
            permiten un monitoreo constante del personal de salud animal .
          </h1>
        </section>
        <section className="card11">
          <img src={imagen10} alt="" />
          <h1>
            Elaboramos un listado con los principales números de emergencia y
            protocolos de acción contemplando cualquier imprevisto.
          </h1>
        </section>
        <section className="card1">
          <img src={imagen11} alt="" />
          <h1>
            {" "}
            Un colaborador te atenderá desde el primer momento que registres una
            cita con nosotros via virtual{" "}
          </h1>
        </section>
      </div>
      <br />
      <section id="preguntas" className="m-auto">
        <h1 className="subtitle d-flex justify-content-center">
          Preguntas <span>Frecuentes</span>{" "}
        </h1>
        <div className="questions__parragraph  d-flex justify-content-center text-center">
          {" "}
          En esta sección podras encontrar la respuesta a las dudas mas
          frecuentes con las cuales cuentan nuestros clientes donde explicamos
          como funciona DOGLOVER, las bondades de nuestro servicio.
        </div>
        <br />

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div id="preguntas" className="accordion-item p-2">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                ¿Que es DOG LOVER?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                Somos una empresa enfocada en el cuidado de animales, para lo
                cual brindamos las mejores medidas de seguridad activas en el
                mercado. Tu mascota estará segura con nosotros ya que contará
                con la atención de personal altamente calificado en practicas
                veterinarias{" "}
              </div>
            </div>
          </div>
          <div id="preguntas" className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                ¿Cómo pido un cita para mi mascota?{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                El procedimiento es sencillo, dale click en el boton de
                registro, rellena los campos necesarios y reserva una cita con
                nostros, de esta manera los encargados de atencion al cliente
                podran comunicarse contigo{" "}
              </div>
            </div>
          </div>
          <div id="preguntas" className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                ¿En que se diferencia con otros servicios?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                En nuestra empresa encontrarás una comunidad de veterinarios
                altamente capacitados en cuidado animal, olvidate de llamar y
                quedarte en espera, gestiona una cita con nosotros y te
                apoyaremos en el menor tiempo posible.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="consigue">
        <img src={imagen15} alt="" width="150px" height="150px" />
        <h1>
          Protege a tu mascota con nosotros y vive una experiencia{" "}
          <span>DIFERENTE </span> en la cual tu engreido estará protegido
          mientras se recupera.
        </h1>
        <img
          src={imagen16}
          alt=""
          width="150px"
          height="150px"
          className="huella"
        />
      </div>

      <footer className="footer">
        <section className="footer__container container">
          <nav className="nav nav--footer">
            <h2 className="footer__title">DOG LOVER</h2>

            <ul className="nav__link nav__link--footer">
              <li className="nav__items">
                <a href="#" className="nav__links">
                  {" "}
                  INICIO
                </a>
              </li>

              <li className="nav__items">
                <a href="#" className="nav__links">
                  {" "}
                  ACERCA DE{" "}
                </a>
              </li>

              <li className="nav__items">
                <a href="#" className="nav__links">
                  {" "}
                  PRODUCTOS{" "}
                </a>
              </li>

              <li className="nav__items">
                <a href="#" className="nav__links">
                  {" "}
                  CONTACTANOS{" "}
                </a>
              </li>
            </ul>
          </nav>
          <form className="footer__form">
            <h2 className="footer__newsletter">Envianos tus datos por aqui</h2>
            <div className="footer__inputs">
              <input
                type="tel"
                placeholder="Telefono:"
                className="footer__input"
                pattern="[0-9]{9}"
              />
              <input
                type="submit"
                value="Contactate"
                className="footer__submit"
              />
            </div>
          </form>
        </section>

        <section className="footer__copy container">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/ToqueMagicoLima/"
              className="footer_icons"
            >
              <img src={imagen17} className="footer__img" alt="" />
            </a>
            <a href="https://wa.link/xg3zpt" className="footer_icons">
              <img src={imagen18} className="footer__img" alt="" />
            </a>
            <a href="#" className="footer_icons">
              <img src={imagen19} className="footer__img" alt="" />
            </a>
          </div>
          <h3 className="footer__copyright">
            Derechos Reservados &copy;SAFETY CAN
          </h3>
        </section>
      </footer>
    </div>
  );
};

export default Home2;
