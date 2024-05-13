let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validSenha = false

let confirmEmail = document.querySelector('#confirmEmail')
let labelConfirmEmail = document.querySelector('#labelConfirmEmail')
let validConfirmEmail = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: blue')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: blue')
    validNome = true
  }
})

function isValidEmail(email) {
  // RegEx para validar o formato do email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}



// JavaScript
// JavaScript
email.addEventListener('input', () => { // Mudamos para o evento input
  let emailValue = email.value.trim();

  if (emailValue.length === 0) {
    labelEmail.innerHTML = 'Email'; // Mantém o texto padrão do rótulo
    labelEmail.classList.remove('label-float-active'); // Remove a classe que move o rótulo para cima
  } else {
    labelEmail.innerHTML = 'Email'; // Mantém o texto padrão do rótulo
    labelEmail.classList.add('label-float-active'); // Adiciona a classe que move o rótulo para cima
  }

  if (!isValidEmail(emailValue)) {
    labelEmail.setAttribute('style', 'color: red');
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: blue');
    email.setAttribute('style', 'border-color: blue');
    validEmail = true;
  }
})

confirmEmail.addEventListener('input', () => { // Mudamos para o evento input
  let confirmEmailValue = confirmEmail.value.trim();

  if (confirmEmailValue.length === 0) {
    labelConfirmEmail.innerHTML = 'Confirmar Email'; // Mantém o texto padrão do rótulo
    labelConfirmEmail.classList.remove('label-float-active'); // Remove a classe que move o rótulo para cima
  } else {
    labelConfirmEmail.innerHTML = 'Confirmar Email'; // Mantém o texto padrão do rótulo
    labelConfirmEmail.classList.add('label-float-active'); // Adiciona a classe que move o rótulo para cima
  }

  if (email.value !== confirmEmailValue) {
    labelConfirmEmail.setAttribute('style', 'color: red');
    confirmEmail.setAttribute('style', 'border-color: red');
    validConfirmEmail = false;
  } else {
    labelConfirmEmail.setAttribute('style', 'color: blue');
    confirmEmail.setAttribute('style', 'border-color: blue');
    validConfirmEmail = true;
  }
})

function cadastrar() {
  if (validNome && validEmail && validConfirmEmail) {
    let listaEmail = JSON.parse(localStorage.getItem('listaEmail') || '[]')

    listaEmail.push({
      nomeCad: nome.value,
      emailCad: email.value
    })

    localStorage.setItem('listaEmail', JSON.stringify(listaEmail))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      window.location.href = 'http://localhost:7700/index.html'
    }, 3000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de inscrever-se</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

let btn = document.querySelector('#email');
let btnConfirm = document.querySelector('#labelEmail');

btn.addEventListener('click', () => {
  let inputEmail = document.querySelector('#email')

  if (inputEmail.getAttribute('type') == 'email') {
    inputEmail.setAttribute('type', 'email')
  } else {
    inputEmail.setAttribute('type', 'email')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmEmail = document.querySelector('#confirmEmail')

  if (inputConfirmEmail.getAttribute('type') == 'email') {
    inputConfirmEmail.setAttribute('type', 'email')
  } else {
    inputConfirmEmail.setAttribute('type', 'email')
  }
})