const emailInput = document.querySelector('#inputEmail')
emailInput.addEventListener('input', oninput)
const save = document.querySelector('.save')
const result = document.querySelector('.result')
const psw1 = document.querySelector('#inputPassword')
psw1.addEventListener('input', oninput)
const psw2 = document.querySelector('#inputPassword2')
psw2.addEventListener('input', oninput)
const emailRegExp = /^[A-Za-z0-9{1}]+@[a-z0-9_-]+\.[a-z]{2,6}$/
save.addEventListener('click', () => {
    if (emailRegExp.test(emailInput.value) && psw1.value === psw1.value){
        result.innerText = 'your email address and password is correct'
        result.style.color = 'green'
    } else {
        result.innerText = 'your email address or password is NOT CORRECT. Please try again'
        result.style.color = 'red'
    }
})

const box = document.querySelector('.box')
let position = 0;
setInterval(() => {
    if (position < 450)
        position++
    box.style.left =`${position}px`
},10)

