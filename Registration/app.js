document.addEventListener("DOMContentLoaded", function () {

    const inputName = document.getElementById('user_name')
    const inputPassword = document.getElementById('user_pass')
    const passBtn = document.querySelector('.user_pass_btn')
    // const btnDown = document.querySelector('.button')
    const bntClose = document.querySelector('.popup__close')
    const popUp = document.querySelector('.popup')
    const submitBtn = document.querySelector('.button')

    inputName.oninvalid = function (event) {
        event.target.setCustomValidity('Username should only contain letters')
    }
    inputPassword.oninvalid = function (event) {
        event.target.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
    }
    passBtn.addEventListener('click', () => {
        passBtn.classList.toggle('active');
        (inputPassword.getAttribute('type') === 'password') ? inputPassword.setAttribute('type', 'text') : inputPassword.setAttribute('type', 'password')
    })

    function openPopUp(){
        popUp.classList.add('open')
    }

    bntClose.addEventListener('click', () => {
        popUp.classList.remove('open')

    })



})