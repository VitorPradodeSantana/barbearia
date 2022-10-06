const menuMobile = document.querySelector('.menu-mobile')
const navegacaoMobile = document.querySelector('#itens-menu-mobile')
const btnAgendamento = document.querySelector('#btn-agendamento')

function mostraMenuMobile() {
  if (navegacaoMobile.style.display === 'block') {
    navegacaoMobile.style.display = 'none'
  } else {
    navegacaoMobile.style.display = 'block'
  }const menuMobile = document.querySelector('.menu-mobile')
  const navegacaoMobile = document.querySelector('#itens-menu-mobile')
  const btnAgendamento = document.querySelector('#btn-agendamento')
  
  function mostraMenuMobile() {
    if (navegacaoMobile.style.display === 'block') {
      navegacaoMobile.style.display = 'none'
    } else {
      navegacaoMobile.style.display = 'block'
    }
  }
  
  btnAgendamento.addEventListener('click', () => {
    location.href = 'agendamento.html'
  })
  
  menuMobile.addEventListener('click', mostraMenuMobile)
  
  
}

btnAgendamento.addEventListener('click', () => {
  location.href = 'agendamento.html'
})

menuMobile.addEventListener('click', mostraMenuMobile)
