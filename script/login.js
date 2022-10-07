const formularioLogin = document.getElementById('formLogin')
const userName = document.getElementById('user-name')
const senhaLogin = document.getElementById('senha')

formularioLogin.addEventListener('submit', e => {
  e.preventDefault()
  let nome = userName.value
  let senha = senhaLogin.value

  let usuario = {
    nome: nome,
    senha: senha
  }

  localStorage.setItem('Usuario', JSON.stringify(usuario))

  location.href = 'paginaPrincipal.html'
})
