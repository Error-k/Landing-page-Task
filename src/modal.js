
export const modal = document.getElementById("modal-form")
const button = document.getElementById("work-with-us__button")
const close = document.getElementsByClassName("modal-form__close")[0]
const body = document.querySelector("body")

const openModal = () => {
    modal.style.display = "block"
    body.style.overflow = "hidden"
}

const closeModalOnBtn = () => {
    modal.style.display = "none"
    body.style.overflow = "visible"
}

const closeModalOnSpace = (ev) => {
    if (ev.target === modal) modal.style.display = "none"
    if (modal.style.display === "none") body.style.overflow = "visible"
}

button.onclick = () => openModal()
close.onclick = () => closeModalOnBtn()
modal.onclick = (ev) => closeModalOnSpace(ev)

