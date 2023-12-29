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
