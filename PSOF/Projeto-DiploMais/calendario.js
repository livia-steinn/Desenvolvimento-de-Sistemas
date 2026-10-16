document.addEventListener('DOMContentLoaded', () => {

  // 1. MENSAGEM AO CLICAR EM "ADICIONAR EVENTO"
  const btnAdicionarEvento = document.querySelector('.botao-evento');
  if (btnAdicionarEvento) {
    btnAdicionarEvento.addEventListener('click', () => {
      alert('Funcionalidade de simulação: Aqui o aluno poderá cadastrar um novo evento no calendário!');
    });
  }

  // 2. MENSAGEM AO CLICAR NAS SETAS DE NAVEGAÇÃO DE MÊS (ANTERIOR / PRÓXIMO)
  const botoesNavegacaoMes = document.querySelectorAll('.navegacao-mes button');
  botoesNavegacaoMes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const direcao = index === 0 ? 'anterior' : 'próximo';
      alert(`Navegação simulada: Redirecionando para o ${direcao} mês do calendário.`);
    });
  });

  // 3. MENSAGEM AO CLICAR EM "CONTINUAR DE ONDE PAREI"
  const btnContinuar = document.querySelector('.botao-continuar');
  if (btnContinuar) {
    btnContinuar.addEventListener('click', (event) => {
      event.preventDefault(); // Impede o redirecionamento imediato para mostrar o alert
      alert('Redirecionando para a página Meus Cursos');
      window.location.href = 'meus_cursos.html';
    });
  }

  // 4. MENSAGEM AO CLICAR EM "VER TODOS OS AVISOS"
  const btnAvisos = document.querySelector('.botao-avisos');
  if (btnAvisos) {
    btnAvisos.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Carregando mural completo de avisos e comunicados da turma...');
      window.location.href = 'meus_cursos.html';
    });
  }

  // 5. MENSAGEM AO CLICAR EM QUALQUER DIA COM EVENTO NO CALENDÁRIO
  const diasComEvento = document.querySelectorAll('.dia.tem-evento');
  diasComEvento.forEach(dia => {
    dia.addEventListener('click', () => {
      const etiqueta = dia.querySelector('.etiqueta-evento');
      const numDia = dia.querySelector('.numero-dia');
      const tituloEvento = etiqueta ? etiqueta.textContent.trim() : 'Evento';
      const diaTexto = numDia ? numDia.textContent.trim() : '';
      alert(`Detalhes do evento do dia ${diaTexto}: ${tituloEvento}`);
    });
  });

});