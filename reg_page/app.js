document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById('user_name')
    const inputEmail = document.getElementById('user_mail')
    const inputPassword = document.getElementById('user_pass')
    const inputPasswordCheck = document.getElementById('user_pass_check')
    const formSubmit = document.getElementById('form')
    const passBtn = document.querySelectorAll('.user_pass_btn')[0]
    const passBtnCheck = document.querySelectorAll('.user_pass_btn')[1]
    const popUp = document.querySelector('.popup')
    const submitBtn = document.querySelector('.button')

    inputPassword.oninvalid = function (event) {
        event.target.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
    }
    
    passBtn.addEventListener('click', (e) => {
        showPassword(passBtn, inputPassword)
    })

    passBtnCheck.addEventListener('click', (e) => {
        showPassword(passBtnCheck, inputPasswordCheck)
    })

    function showPassword(btn, input){
        btn.classList.toggle('active');
        (input.getAttribute('type') === 'password') ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password')
    }

    function openPopUp() {
        popUp.classList.add('open')
        setTimeout(function(){
            window.location.href = '../home/home_page.html';
          }, 2000);
    }

    function errorPass(){
        alert('Password mismatch')
        inputPasswordCheck.value = ''
    };

    formSubmit.addEventListener('submit', (e)=>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', (e) => {
        var user = {
            login: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }
        var json = JSON.stringify(user);
        var request = new XMLHttpRequest();
        request.open("POST", "https://jsonplaceholder.typicode.com/users");
        request.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 201) {
                if(user.password != '' && user.email != '' && user.login != '' && inputPasswordCheck.value != ''){
                    (user.password === inputPasswordCheck.value)? openPopUp() : errorPass();
                }
            }
        }
        request.send(json);
    });

})