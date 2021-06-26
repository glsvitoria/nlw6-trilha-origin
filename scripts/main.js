/* Abre e fecha o menu lateral */
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for(const element of toogle) {
    element.addEventListener("click", function () {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item ddo menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener("click", function(){
        nav.classList.remove('show')
    })
}

/* Mudar o header da página quando der scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        // Scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // Menor que a altura do header
        header.classList.remove('scroll')
    }
})