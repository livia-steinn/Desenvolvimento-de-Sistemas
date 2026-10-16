document.addEventListener('DOMContentLoaded', () => {

  // 1. BARRA DE PESQUISA EM TEMPO REAL E PELO FORMULÁRIO
  const formPesquisa = document.querySelector('.barra-pesquisa');
  const inputPesquisa = document.querySelector('.barra-pesquisa input');
  const cardsCursos = document.querySelectorAll('.curso-card');
  const gruposCursos = document.querySelectorAll('.grupo-cursos');

  function filtrarCursos(termo) {
    const textoBusca = termo.toLowerCase().trim();

    cardsCursos.forEach(card => {
      const titulo = card.querySelector('h4').textContent.toLowerCase();
      const descricao = card.querySelector('p').textContent.toLowerCase();
      const area = card.querySelector('.curso-area').textContent.toLowerCase();

      // Verifica se o termo pesquisado está no título, descrição ou área do curso
      if (titulo.includes(textoBusca) || descricao.includes(textoBusca) || area.includes(textoBusca)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Oculta títulos de categorias que ficaram totalmente vazias
    gruposCursos.forEach(grupo => {
      const cardsVisiveis = grupo.querySelectorAll('.curso-card[style*="display: flex"], .curso-card:not([style*="display: none"])');
      if (cardsVisiveis.length === 0 && textoBusca !== '') {
        grupo.style.display = 'none';
      } else {
        grupo.style.display = 'block';
      }
    });
  }

  // Evento ao digitar na barra de pesquisa
  if (inputPesquisa) {
    inputPesquisa.addEventListener('input', (e) => {
      filtrarCursos(e.target.value);
    });
  }

  // Evento ao submeter o formulário de pesquisa
  if (formPesquisa) {
    formPesquisa.addEventListener('submit', (e) => {
      e.preventDefault();
      filtrarCursos(inputPesquisa.value);
    });
  }

  // 2. BOTÕES "VER DETALHES" (Salva o curso selecionado em JSON no localStorage)
  const botoesDetalhes = document.querySelectorAll('.botao-curso');

  botoesDetalhes.forEach(botao => {
    botao.addEventListener('click', (e) => {
      e.preventDefault();

      const card = e.target.closest('.curso-card');
      const nomeCurso = card.querySelector('h4').textContent;
      const areaCurso = card.querySelector('.curso-area').textContent;

      // Cria o objeto em formato JSON para salvar no navegador
      const cursoSelecionado = {
        nome: nomeCurso,
        area: areaCurso,
        dataAcesso: new Date().toLocaleDateString('pt-BR')
      };

      // Salva no localStorage em formato JSON
      localStorage.setItem('diploMais_cursoAtual', JSON.stringify(cursoSelecionado));

      alert(`Você selecionou o curso "${nomeCurso}". Redirecionando para os detalhes...`);
      // Exemplo: window.location.href = 'meus_cursos.html';
    });
  });

});