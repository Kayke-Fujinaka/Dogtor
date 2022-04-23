const btnMobile = document.getElementById("btn-mobile")

const toggleMenu = () => {
    const header = document.getElementById("header")
    header.classList.toggle('active')
}

btnMobile.addEventListener("click", toggleMenu)