//Função que cria uma caixa de dialogo (Modal)
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
//Função que fecha a caixa de dialogo (Modal)
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

//Array que salva os valores recebidos no HTML
  let contatos = new Array();

        function adicionar(){
         let novoContato = {
            nome:document.getElementById("campoNome").value,
            email:document.getElementById("campoEmail").value
         }
         contatos.push(novoContato)
         document.getElementById("campoNome").value = "";
         document.getElementById("campoEmail").value = "";
         
         //É necessario incluir as funções para fechar a caixa de dialogo, e para carregar a tabela no HTML
         closeModal();
         carregarTabela(); 
        }
        
//Função que carrega a tabela no HTML        
        function carregarTabela(){
            let tabela = document.getElementById("corpoTabela");

            tabela.innerHTML="";

            for(let i = 0; i < contatos.length; i++){
                let contato = contatos[i];
                tabela.innerHTML +=
                "<td>"+contato.nome+"</td>"+
                "<td>"+contato.email+"</td>"+
                "<td><button onclick='remover("+i+")'>Remover</button></td>"
                "<td><button onclick='editar("+i+")'>Remover</button></td>"
            }
           
        }
//Função para remover os valores inclusos
        function remover(index){
            contatos.splice(index, 1);
            carregarTabela();

        }

        contatos.addEventListener('submit', function(event) {
            // Verifique se todos os campos obrigatórios estão preenchidos
            const requiredFields = document.querySelectorAll('[required]');
            let teste = true;
          
            for (let i = 0; i < requiredFields.length; i++) {
              if (requiredFields[i].value === '') {
                teste = false;
                break;
              }
            }
          
            // Se algum campo obrigatório estiver vazio, exiba um alerta
            if (!teste) {
              alert('Por favor, preencha todos os campos obrigatórios.');
              event.preventDefault();
            }
          });