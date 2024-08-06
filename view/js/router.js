export class Router {
    // foi criado uma objeto vazio para receber
    routes = {}

    add(routeName, page){
        // "/": "/pages/home.html",
        this.routes[routeName] = page
        // esse objeto route tem propriedade que o routeName, e tem o valor que e o page
    }

    // tirar o padrao de redirecionar no link
    route(event) {
        // verifique se eu passei o evento se eu nao passei window ferifica
        event = event || window.event
        // nao fassa o padrao nao tenha o padrao do evento que e do link
        event.preventDefault()

        // historio de dado coloque o estado no historico
        window.history.pushState({}, "", event.target.href) // o eventoque e disparado que e o onclic pelo href que e o <a>
        // sao 3 tipos de dados o tipo de dados{}, "" o segundo e a url
        this.handle()
        // paraacessar essafuncao dentro da classe usa o this
    }

    handle() {
        // para obter a parta "/" localizaçao da pasta
        const { pathname } = window.location // desetruturado .pathname


        // como adicionar uma rota 
        // se tiver as notas mostre || senao (ou) mostre a rota 404
        const route = this.routes[pathname] || this.routes[404]

        // deixar async a chamada da pagina da routes

        // vai buscar essa rota quando eu concluir prometo que vou voutar com dados
        fetch(route)
            .then(data => data.text())
            .then(html => {
                // como tem conteudo html usar o innerHTML
                document.querySelector("#app").innerHTML = html
            })

        console.log(route)
    }
}
// pode exportar desse moda mas do anterior seria melhor para ter mais controle
// export default new Router()
