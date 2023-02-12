class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    
    }


    animateLinks(){
        this.navLinks.forEach((link)=> {
        link.style.animation ? (link.style.animation = "")
        :(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }
    init(){
        if (this.mobileMenu){
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






function calcular1(){

    var base = document.getElementById('txtinicio');
    var fim = document.getElementById('txtaltura');
    var res = document.getElementById('res1')




    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        alert('confira os dados digitado')
    }else{
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if(p<=0){
            alert('passo 0, considerando passo 1 ')
            p=1
        }

        if (i < f){

            res.innerHTML='contando:'
            for(var a = i; a<=f; a=a+p ){
                
                res.innerHTML += `${a} \u{1F449}`
    
            }

        }else{

            res.innerHTML='contando:'
            for(var a = i; a>=f; a=a-p ){
                
                res.innerHTML += `${a} \u{1F449}`
    
            }
            
        }
        res.innerHTML += `${a} \u{1F3C1}`
         
    }
    

}


