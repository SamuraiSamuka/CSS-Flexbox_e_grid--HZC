let iconeMenu = document.querySelector('.cabecalho__menu')
let menu = document.querySelector('.menu-lateral')

iconeMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})