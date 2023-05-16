//Função que cria uma caixa de dialogo (Modal)
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

//Função que fecha a caixa de dialogo (Modal)
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

//Array que salva os valores recebidos no HTML
let contatos = new Array();

function adicionar(event) {
  //Função para não chamar o backend
  event.preventDefault();

  const novoContato = {
    nome: document.getElementById('campoNome').value,
    email: document.getElementById('campoEmail').value,
  };

  contatos.push(novoContato);
  closeModal();
  carregarTabela();

  document.getElementById('campoNome').value = '';
  document.getElementById('campoEmail').value = '';
}

//Função que carrega a tabela no HTML
function carregarTabela() {
  let tabela = document.getElementById('corpoTabela');

  tabela.innerHTML = '';

  for (let i = 0; i < contatos.length; i++) {
    let contato = contatos[i];
    tabela.innerHTML +=
      '<td>' +
      contato.nome +
      '</td>' +
      '<td>' +
      contato.email +
      '</td>' +
      "<td><button onclick='remover(" +
      i +
      ")'>Remover</button></td>";
    "<td><button onclick='editar(" + i + ")'>Remover</button></td>";
  }
}
//Função para remover os valores inclusos
function remover(index) {
  contatos.splice(index, 1);
  carregarTabela();
}
