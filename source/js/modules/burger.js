
let burger = document.querySelector('.header__burger')
let headerNav = document.querySelector('.header__main-nav')
const burgerButton = () => {
   
    burger.addEventListener("click", () => {
    console.log('asdad')
    headerNav.classList.toggle('main-nav--tablet-off')
    headerNav.classList.toggle('main-nav--tablet')
   
})
}

export {burgerButton}