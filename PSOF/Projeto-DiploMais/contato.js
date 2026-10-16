document.addEventListener('DOMContentLoaded', () => {

  // 1. ATUALIZAR O NOME DO ARQUIVO ANEXADO NA TELA
  const inputAnexo = document.getElementById('anexo');
  const spanNomeArquivo = document.getElementById('nome-arquivo');

  if (inputAnexo && spanNomeArquivo) {
    inputAnexo.addEventListener('change', () => {
      if (inputAnexo.files.length > 0) {
        spanNomeArquivo.textContent = inputAnexo.files[0].name;
      } else {
        spanNomeArquivo.textContent = 'Nenhum arquivo selecionado';
      }
    });
  }

  // 2. MENSAGEM AO ENVIAR O FORMULÁRIO DE CONTATO
  const formContato = document.querySelector('.form-contato');

  if (formContato) {
    formContato.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio real do formulário

      const nome = document.getElementById('nome').value;
      const assuntoSelect = document.getElementById('assunto');
      const textoAssunto = assuntoSelect.options[assuntoSelect.selectedIndex].text;

      alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre "${textoAssunto}" foi enviada com sucesso. Responderemos em breve.`);

      // Reseta os campos do formulário
      formContato.reset();
      if (spanNomeArquivo) {
        spanNomeArquivo.textContent = 'Nenhum arquivo selecionado';
      }
    });
  }

  // 3. AVISO AO CLICAR NO LINK DO WHATSAPP
  const linkWhatsapp = document.querySelector('.link-contato');
  if (linkWhatsapp) {
    linkWhatsapp.addEventListener('click', (event) => {
      alert('Redirecionando para a conversa do WhatsApp da DiploMais...');
    });
  }

  // 4. AVISO AO CLICAR EM "VER TODAS AS PERGUNTAS NA CENTRAL DE AJUDA"
  const botaoFaq = document.querySelector('.botao-faq');
  if (botaoFaq) {
    botaoFaq.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Carregando central de ajuda completa com mais perguntas e respostas...');
    });
  }

});