// Interações simples para deixar o site mais útil e fácil de usar.
const dicas = [
  'Experimente deixar as notificações silenciosas enquanto faz uma atividade.',
  'Antes de dormir, escolha alguma coisa relaxante para fazer longe da tela.',
  'Combine um momento do dia para conversar com alguém sem olhar o celular.',
  'Escolha uma música e aproveite sem ficar rolando o feed ao mesmo tempo.',
  'Que tal desenhar, ler ou dar uma caminhada quando o clima estiver agradável?'
];
const botaoDica = document.querySelector('#nova-dica');
const textoDica = document.querySelector('#dica-texto');
let indiceDica = 0;
botaoDica.addEventListener('click', () => {
  indiceDica = (indiceDica + 1) % dicas.length;
  textoDica.textContent = dicas[indiceDica];
});
const caixas = [...document.querySelectorAll('.habit-checkbox')];
const progressoTexto = document.querySelector('#checklist-progress');
const progressoBarra = document.querySelector('#progress-fill');
function atualizarProgresso() {
  const marcadas = caixas.filter(caixa => caixa.checked).length;
  progressoTexto.textContent = `${marcadas} de ${caixas.length} ideias marcadas`;
  progressoBarra.style.width = `${marcadas / caixas.length * 100}%`;
}
caixas.forEach(caixa => caixa.addEventListener('change', atualizarProgresso));
atualizarProgresso();
