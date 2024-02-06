const ArrProject = [
  {
    title: "SeñalizaTec",
    des: "Es una aplicacion web desarrollada con React + Nodejs para aprender sobre la LSA",
    urlImg: "./assets/img/proyect/pro-2.png",
    link: "https://github.com/Xenock20/Demo-Se-alizaTec",
  },
  {
    title: "Pokedex",
    des: "Aplicacion web desarrollada en ionic + react consumiendo Graphql para ver a tus pokemones favoritos.",
    urlImg: "./assets/img/proyect/pro-1.png",
    link: "https://github.com/Xenock20/teckTask-Ionic-Pokeapi",
  },
  {
    title: "Rock, Paper and Scissors Game",
    des: "El clasico juego de piedra, papel o tijera hecho en php + mysql con docker.",
    urlImg: "./assets/img/proyect/pro-3.png",
    link: "https://github.com/Xenock20/PHP_And_Docker_Proyect",
  },
  {
    title: "Sistema VigilantControl",
    des: "Sistema de control y seguimientos de productos hecho en React.",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/Modelos_Sistemas",
  },
  {
    title: "GestorAlumnosPHP",
    des: "Aplicacion Web para gestionar alumnos en cursos hecho con PHP + AJAX.",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/CRUD_PHP_AJAX",
  },
  {
    title: "PresupuestoExpressWeb",
    des: "Aplicacion Web para gestionar presupuestos hecho en JS vanilla.",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/AppWeb_Presupuesto",
  },
  {
    title: "ClientesMasterControl",
    des: "Aplicacion de control de clientes hecho en Java EE",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/Control_Clientes",
  },
  {
    title: "FakeStoreAngular",
    des: "e-commerce hecho en angular cosumiendo la api de fakestore.",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/FakeStoreAngular",
  },
  {
    title: "TriviaMusical",
    des: "Juego Web sobre una trivia musical hecho en JS vanilla.",
    urlImg: "./assets/img/notfound.jpg",
    link: "https://github.com/Xenock20/triviamusical.github.io",
  },
];

document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".site-header").classList.toggle("menu-open");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.querySelector(".site-header").classList.remove("menu-open");
  }
});

const cont = document.getElementById("proCont");

ArrProject.forEach((element) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const a = document.createElement("a");

  div.className = "project";
  img.className = "project-image";
  h3.className = "project-title";
  p.className = "project-description";
  a.className = "project-link";

  a.setAttribute("target", "_blank");
  a.setAttribute("href", element.link);
  img.setAttribute("src", element.urlImg);
  img.setAttribute("alt", "imagen-proyecto");

  h3.innerText = element.title;
  p.innerText = element.des;
  a.innerText = "Demo o GitHub";

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(a);

  cont.appendChild(div);
});

//Cambiar modo oscuro y claro

const modoBtn = document.getElementById("modo-btn");
const iconoModo = document.getElementById("icono-modo");

let modoClaro = false;

modoBtn.addEventListener("click", () => {
  modoClaro = !modoClaro; // Cambiar el estado del modo

  if (modoClaro) {
    iconoModo.classList.remove("fa-sun");
    iconoModo.classList.add("fa-moon");
    modoBtn.classList.add("light-mode-btn");

    document.getElementById("body").classList.add("light-mode-body");
    document.getElementById("site-header").classList.add("light-mode-header");
    document.getElementById("inicio-link").classList.add("light-mode-h1");
    document.getElementById("menu-icon").classList.add("light-mode");
    document.getElementById("main-nav").classList.add("light-mode-main-nav");
    document.getElementById("section-title").classList.add("light-mode");
    document.getElementById("section-subtitle").classList.add("light-mode");
    document
      .getElementById("icon-link-1")
      .classList.add("light-mode-icon-link");
    document
      .getElementById("icon-link-2")
      .classList.add("light-mode-icon-link");
    document
      .getElementById("icon-link-3")
      .classList.add("light-mode-icon-link");
    document
      .getElementById("scroll-link")
      .classList.add("light-mode-scroll-link");
    document.getElementById("section-title-h2").classList.add("light-mode");
    document
      .getElementById("cont-info")
      .classList.add("light-mode-cont-info-about");
    document.getElementById("about-text").classList.add("light-mode");
    document.getElementById("cv-link").classList.add("light-mode-cv-link");
    document.getElementById("section-title-h2-con").classList.add("light-mode");
    document.getElementById("lenguajes-title").classList.add("light-mode");
    document.getElementById("frameworks-title").classList.add("light-mode");
    document.getElementById("softwares-title").classList.add("light-mode");
    document.getElementById("section-title-h2-pro").classList.add("light-mode");
    document.getElementById("footer").classList.add("light-mode-footer");

    const projects = document.getElementById("proCont");

    projects.innerHTML = "";

    ArrProject.forEach((element) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const a = document.createElement("a");

      div.className = "project light-mode-project";
      img.className = "project-image";
      h3.className = "project-title light-mode";
      p.className = "project-description light-mode";
      a.className = "project-link light-mode-link";

      a.setAttribute("target", "_blank");
      a.setAttribute("href", element.link);
      img.setAttribute("src", element.urlImg);
      img.setAttribute("alt", "imagen-proyecto");

      h3.innerText = element.title;
      p.innerText = element.des;
      a.innerText = "Demo o GitHub";

      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(a);

      projects.appendChild(div);
    });
  } else {
    iconoModo.classList.remove("fa-moon");
    iconoModo.classList.add("fa-sun");
    modoBtn.classList.remove("light-mode-btn");

    document.getElementById("body").classList.remove("light-mode-body");
    document
      .getElementById("site-header")
      .classList.remove("light-mode-header");
    document.getElementById("inicio-link").classList.remove("light-mode-h1");
    document.getElementById("menu-icon").classList.remove("light-mode");
    document.getElementById("main-nav").classList.remove("light-mode-main-nav");
    document.getElementById("section-title").classList.remove("light-mode");
    document.getElementById("section-subtitle").classList.remove("light-mode");
    document
      .getElementById("icon-link-1")
      .classList.remove("light-mode-icon-link");
    document
      .getElementById("icon-link-2")
      .classList.remove("light-mode-icon-link");
    document
      .getElementById("icon-link-3")
      .classList.remove("light-mode-icon-link");
    document
      .getElementById("scroll-link")
      .classList.remove("light-mode-scroll-link");
    document.getElementById("section-title-h2").classList.remove("light-mode");
    document
      .getElementById("cont-info")
      .classList.remove("light-mode-cont-info-about");
    document.getElementById("about-text").classList.remove("light-mode");
    document.getElementById("cv-link").classList.remove("light-mode-cv-link");
    document
      .getElementById("section-title-h2-con")
      .classList.remove("light-mode");
    document.getElementById("lenguajes-title").classList.remove("light-mode");
    document.getElementById("frameworks-title").classList.remove("light-mode");
    document.getElementById("softwares-title").classList.remove("light-mode");
    document
      .getElementById("section-title-h2-pro")
      .classList.remove("light-mode");
    document.getElementById("footer").classList.remove("light-mode-footer");

    const projects = document.getElementById("proCont");

    projects.innerHTML = "";

    ArrProject.forEach((element) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const a = document.createElement("a");

      div.className = "project";
      img.className = "project-image";
      h3.className = "project-title";
      p.className = "project-description";
      a.className = "project-link";

      a.setAttribute("target", "_blank");
      a.setAttribute("href", element.link);
      img.setAttribute("src", element.urlImg);
      img.setAttribute("alt", "imagen-proyecto");

      h3.innerText = element.title;
      p.innerText = element.des;
      a.innerText = "Demo o GitHub";

      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(a);

      projects.appendChild(div);
    });
  }
});
