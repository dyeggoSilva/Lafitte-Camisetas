var main = document.getElementById('main');

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }


    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();

//final da barra 


function login() {
    $(main).load("pags/login/login.html");
}

function adesivo() {
    $(main).load("pags/pagBase/calculoMetro.html");
}

function papel() {
    $(main).load("pags/calc-papel/calcPapel.html");
}

function silk() {
  $(main).load("pags/calc-silk/calcSilk.html");
}

function pedidos() {
    $(main).load("pags/pedidos/pedidos.html");
  }
  function entrega() {
    $(main).load("pags/entrega/entrega.html");
  }

function home() {
    main.innerHTML = 'home';
}



function calcular2() {

    var res2 = document.getElementById('res1');
    var base = document.getElementById("base");
    var altura = document.getElementById("altura")

    var i = 0;
    var ba = Number(base.value)
    var qo = 0;

    var j = 0
    var al = Number(altura.value)
    var qv = 0


    for (qo = 0; i <70; qo++) {
        i += ba
        if (i > 70) { break; }
    }

    
    for (qv= 0; j < 140; qv++) {
        j += al
        if (j > 140) { break; }
    }

    var total = qo * qv;

    console.log(`qo ${qo}`)
    console.log(`j ${qv}`)
    console.log(`j ${j}`)
    console.log(`i ${i}`)
    console.log(`total ${total}`)


    if (total > 500) {
        res2.innerHTML = `A quantidade total na folha de 70x140cm é de 500un e fica o valor de R$65,00`;
    }
    else {
        res2.innerHTML = `A quantidade total na folha de 70x140cm é de ${total}un e fica o valor de R$65,00`;
    }
}

function CalcSilk(){
    var camisas = document.getElementById('camisas')
    var telas = document.getElementById('telas')
    var aplic = document.getElementById('ap')
    var res = document.getElementById('resSilk')

    var xg = document.getElementById("camisasxg")

    var c = Number(camisas.value)
    var t = Number(telas.value)
    var a = Number(aplic.value)
    

    var valorCamisas = c * 32;
    var valorTelas = t * 40;
    var valorAplic = a * 18;

    var res1 = valorAplic + valorTelas + valorCamisas;

    var uni = res1 / c

    res.innerHTML = `Valor total e de <strong> R$ ${res1},00 </strong> e o valor unitário fica R$${uni},00`

   /* function add(){

        var totalxg = x * 45;

        var res2 = totalxg + res1;

        res.innerHTML = `Valor total e de <strong> R$ ${res2},00 </strong>`

       
    }*/

    console.log(valorTelas);
    console.log(valorCamisas);
    console.log(valorAplic);
}

function calcPapel(){
   var a3 = document.getElementById('folha');
   var folha= String(a3.value);
   console.log(folha);


   for (var i = 0; i < folha.length; i++){
    if ( folha.checked ) {

        if(A3 == "A3"){
            var Pacote_i = "Pacote UM";
            alert(Pacote_i);

        }else if (folha == "A4") {
            var Pacote_ii = "Pacote DOIS";
            alert(Pacote_ii);
        }
    }
}
}


   /*if(A3 == "A3"){

    var res2 = document.getElementById('resPapel');
    var base = document.getElementById("base");
    var altura = document.getElementById("altura")

    var i = 0;
    var ba = Number(base.value)
    var qo = 0;

    var j = 0
    var al = Number(altura.value)
    var qv = 0


    for (qo = 0; i <27; qo++) {
        i += ba
        if (i > 27) { break; }
    }

    
    for (qv= 0; j < 40; qv++) {
        j += al
        if (j > 40) { break; }
    }

    var total = qo * qv;

    console.log(`qo ${qo}`)
    console.log(`j ${qv}`)
    console.log(`j ${j}`)
    console.log(`i ${i}`)
    console.log(`total ${total}`)


    if (total == 1) {
        res2.innerHTML = `A quantidade total na folha A3 é de 1un e fica o valor de R$10,50 com corte e 7,50 sem corte`;
    }
    else {
        res2.innerHTML = `A quantidade total na folha A3 é de ${total}un e fica o valor de R$10,50 com corte e 7,50 sem corte`;
    }
   }
*/

const apiUrl = 'https://registro-de-pedio-api.dyeggochocolat.repl.co';
    
function criarPedido() {
    const pedido = document.getElementById('pedido').value;
    const nome = document.getElementById('nome').value;
    const produto = document.getElementById('produto').value;
    const telefone = document.getElementById('telefone').value;

    fetch(`${apiUrl}/pedidos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pedido: pedido,
            nome: nome,
            produto: produto,
            telefone: telefone,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Pedido criado:', data);
        listarPedidos();
    })
    .catch(error => {
        console.error('Erro ao criar pedido:', error);
    });
}

function listarPedidos() {
    fetch(`${apiUrl}/pedidos`)
    .then(response => response.json())
    .then(data => {
        const pedidosBody = document.getElementById('pedidosBody');
        pedidosBody.innerHTML = '';

        data.forEach(pedido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.pedido}</td>
                <td>${pedido.nome}</td>
                <td>${pedido.produto}</td>
                <td>${pedido.telefone}</td>
                <td><button onclick="at(${pedido.id})">Atualizar</button> <button onclick="ex(${pedido.id})">Finalizar</button> </td>
            `;
            pedidosBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Erro ao listar pedidos:', error);
    });
}


function listarPedidosEntrega() {
    fetch(`${apiUrl}/pedidos`)
    .then(response => response.json())
    .then(data => {
        const pedidosBody = document.getElementById('pedidosBody');
        pedidosBody.innerHTML = '';

        data.forEach(pedido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.pedido}</td>
                <td>${pedido.nome}</td>
                <td>${pedido.produto}</td>
                <td>${pedido.telefone}</td>
                <td><button onclick="ex(${pedido.id})">Entregue</button> </td>
            `;
            pedidosBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Erro ao listar pedidos:', error);
    });
}

function at(id) {

    const pedido = document.getElementById('pedido').value;
    const nome = document.getElementById('nome').value;
    const produto = document.getElementById('produto').value;
    const telefone = document.getElementById('telefone').value;

    fetch(`${apiUrl}/dados/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pedido: pedido,
            nome: nome,
            produto: produto,
            telefone: telefone,
        }),
    })

    .then(response => response.json())
    .then(data => {
        console.log('Atualizar pedido com ID:', id);
        listarPedidos();
    })
    .catch(error => {
        console.error('Erro ao excluir pedido:', error);
    });
    
}

function ex(id) {
    fetch(`${apiUrl}/dados/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Pedido excluído:', data);
        listarPedidos();
    })
    .catch(error => {
        console.error('Erro ao excluir pedido:', error);
    });
}






