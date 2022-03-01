
const initMobileMenu = () => {
    const burger = document.querySelector(".header__burger")
    burger.addEventListener("click", () => {
    if (burger.classList.contains("_active")) {
        burger.classList.remove("_active")
    } else {
        burger.classList.add("_active")
    }
    
})
} 

export {initMobileMenu}

