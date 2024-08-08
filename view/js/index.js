import { Router } from "./router.js"; //importar com o .js
// index.js


// estar erdabdo la a classe router essas funcoes e para usar as funcoes tem que ter o router.
const router = new Router()

router.add("/", "/pages/home.html")
router.add( "/developers", "/pages/developers.html")
router.add("/login", "/pages/login.html")
router.add(404, "/pages/404.html")


router.handle();
// sempre que o usuario clicar no previo do navegaador
window.onpopstate = () => router.handle();

// to colocando na window o funcao que ta no <a></a> ai ela pode ser acessada diretamento ou indiretamente bora o toute como funcao que vai deparar
window.route = () => router.route()