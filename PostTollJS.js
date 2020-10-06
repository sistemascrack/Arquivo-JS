/**
 * Arquivo que contém as funções js do PostTool a serem realizadas no navegador.
 */

var qtdGroupsDivisions; // armazena quantidade de divisões (groups you managed, other ...) de grupos que existem
var amountGroups; // armazena a quantidade de grupos que o usuário faz parte renderizados na tela

/**
 * Pega a quantidade de grupos que o usuário faz parte renderizamos na tela.
 */
function getDisplayedGroups(){
	// pega a quantidade de divisões (groups you managed, other ...) de grupos que existem
	qtdGroupsDivisions = document.getElementsByClassName("_2pip").length;

	// pega a quantidade de grupos já renderizados na tela
	amountGroups = document.getElementsByClassName("_2pip")[qtdGroupsDivisions - 1].children.length;

	// rola para p final da página
	window.scroll(0, document.body.scrollHeight);

	return amountGroups;
}

/**
 * Pega os grupos que o usuário faz parte.
*/
function getGroups(){

	// string que armazena todos os grupos e seus ids
	var groupsList = "";

	// percorre por todos os grupos e pega o nome de cada um e seu id
	for (var i = 0; i < amountGroups; i++){

		// pega o nome do grupo
		groupsList += document.getElementsByClassName("_2pip")[qtdGroupsDivisions - 1].children[i].firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.innerText + "<!!>";

		// pega o id do grupo
		groupsList += document.getElementsByClassName("_2pip")[qtdGroupsDivisions - 1].children[i].firstElementChild.href.split('/')[4] + "<$$>";
	}

	return groupsList;
}
