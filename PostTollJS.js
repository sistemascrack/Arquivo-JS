/**
 * Arquivo que contém as funções js do PostTool a serem realizadas no navegador.
 */

/**
 * Função delay
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Exibe todos os grupos que o usuário faz parte.
*/
var qtd; // armazena a quantidade de divisões de grupos que existem
var amountGroups; // armazena a quantidade de grupos que o usuário faz parte

async function showGroups(){
	// pega a quantidade de divisões (groups you managed, other ...) de grupos que existem
	qtd = document.getElementsByClassName("_2pip").length;

	// pega a quantidade de grupos já renderizados na tela
	amountGroups = document.getElementsByClassName("_2pip")[qtd - 1].children.length;

	// faz o processo de carregar até que todos os grupos estejam renderizados na tela
	do {
		// rola para p final da página
		window.scroll(0, document.body.scrollHeight)

		// espera 5 segundos
		await delay(5000);

		// variavel auxiliar para pegar a nova quantidade de grupos renderizados na tela após a rolagem da página
		var amountGroupsAux = document.getElementsByClassName("_2pip")[qtd - 1].children.length;

		// verifica se a nova quantidade de grupos é diferente a quantidade que já foi capturada.
		// Se for, diferente, atualiza a quantidade de grupos capturados, reseta a variavel auxiliar para que continue o processo e na próxima
		// vez compare com a quantidade anterior já capturada. Se for igual, sai do laço porque já renderizou na tela todos os grupos que o usuário
		// faz parte
		if (amountGroups != amountGroupsAux){
				amountGroups = amountGroupsAux;
				amountGroupsAux = 0;
		}

	}while(amountGroups != amountGroupsAux)
}

// pega os grupos que o usuário faz parte e os retorna como uma string separando o nome do grupo e e o id do grupo por <!!> e 
// cada grupo por <$$>
function getGroups(){

	// string que armazena todos os grupos e seus ids
	var groupsList = "";

	// percorre por todos os grupos e pega o nome de cada um e seu id
	for (var i = 0; i < amountGroups; i++){

		// pega o nome do grupo
		groupsList += document.getElementsByClassName("_2pip")[qtd - 1].children[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.innerText + "<!!>";

		// pega o id do grupo
		groupsList += document.getElementsByClassName("_2pip")[qtd - 1].children[i].firstElementChild.href.split('/')[4] + "<$$>";
	}

	return groupsList;
}
