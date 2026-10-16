document.addEventListener('DOMContentLoaded', () => {

  // 1. INTERAÇÃO DO FORMULÁRIO DE CADASTRO
  const formCadastro = document.querySelector('.form-cadastro');

  if (formCadastro) {
    formCadastro.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o recarregamento da página ao clicar em Cadastrar

      const campoNome = formCadastro.querySelector('input[type="text"]');
      const nome = campoNome ? campoNome.value : 'usuário';

      alert(`Cadastro realizado com sucesso! Seja bem-vindo(a) ao DiploMais, ${nome}.`);
      formCadastro.reset(); // Limpa os campos do formulário
    });
  }

  // 2. BOTÃO "ENCONTRAR MEU CURSO"
  const btnEncontrarCurso = document.querySelector('.texto-aprenda button');

  if (btnEncontrarCurso) {
    btnEncontrarCurso.addEventListener('click', () => {
      window.location.href = 'explorar.html';
    });
  }

  // 3. BOTÕES "SAIBA MAIS" DAS ÁREAS DE CURSOS (Tecnologia, Logística, Indústria)
  const botoesSaibaMais = document.querySelectorAll('.card-curso button');

  botoesSaibaMais.forEach((botao) => {
    botao.addEventListener('click', (event) => {
      const card = event.target.closest('.card-curso');
      const area = card ? card.querySelector('h3').textContent : '';

      alert(`Redirecionando para os cursos de ${area}...`);
      window.location.href = 'explorar.html';
    });
  });

});