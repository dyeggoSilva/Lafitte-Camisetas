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


function sobrenos() {
    main.innerHTML = 'Sobre Nós'
}

function adesivo() {
    $(main).load("pags/pagBase/calculoMetro.html");


}


function papel() {
    $(main).load("pags/calc-papel/calcPapel.html");
}

function silk() {
  $(main).load("pags/calc-silk/calcSilk.html")
}

function home() {
    main.innerHTML = 'home'
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

