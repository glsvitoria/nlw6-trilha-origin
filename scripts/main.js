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
function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        // Scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // Menor que a altura do header
        header.classList.remove('scroll')
    }
}
/* Testimonials swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/* Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal   ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção que estiver visível na sala */
const sections = document.querySelectorAll('main section[id]') /*Todas as seções que contenham um id qualquer */
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }

    }
}

/* Função para chamar as duas funções anteriores de uma vez só */
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})