window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".header")

    header.classList.toggle("scrolled", this.window.scrollY > 10)
})