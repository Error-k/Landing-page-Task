import { modal } from "./modal";
import { openPopup } from "./popup";

const form = document.getElementById("modal-form__form")
const formInputs = document.querySelectorAll(".modal-form__form_input")
const inputEmail = document.getElementById("modal-form__form_input-email")
const inputName = document.getElementById("modal-form__form_input-name")
const inputMessage = document.getElementById("modal-form__form_input-message")

const validateEmail = (email) => {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase().trim())
}

const submitForm = (ev) => {
    ev.preventDefault()

    const emailValue = inputEmail.value
    const nameValue = inputName.value
    const messageValue = inputMessage.value
    const errorValidation = Array.from(formInputs).filter(input => input.value === '')

    formInputs.forEach(input => {
        if (input.value === '') input.classList.add("errorValidation")
        else input.classList.remove("errorValidation")
    })

    if (errorValidation.length !== 0) return false

    if (!validateEmail(emailValue)) {
        inputEmail.classList.add("errorValidation")
        return false
    } else inputEmail.classList.remove("errorValidation")

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: emailValue,
            name: nameValue,
            message: messageValue,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(() => modal.style.display = "none")
        .then(() => openPopup())

    form.reset()
}

form.onsubmit = (ev) => submitForm(ev)