
const popup = document.getElementById("popup")
const close = document.getElementsByClassName("popup__close")[0]
const body = document.querySelector("body")

export const openPopup = () => {
    popup.style.display = "block"
    body.style.overflow = "hidden"
}

const closePopupOnBtn = () => {
    popup.style.display = "none"
    body.style.overflow = "visible"
}

const closePopupOnSpace = (ev) => {
    if (ev.target === popup) popup.style.display = "none"
    if (popup.style.display === "none") body.style.overflow = "visible"
}

close.onclick = () => closePopupOnBtn()
popup.onclick = (ev) => closePopupOnSpace(ev)

