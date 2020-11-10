/**
 * Arquivo que contém as funções js do PostTool a serem realizadas no navegador.
 */

var qtdGroupsDivisions; // armazena quantidade de divisões (groups you managed, other ...) de grupos que existem
var amountGroups; // armazena a quantidade de grupos que o usuário faz parte renderizados na tela

/**
 * Pega a quantidade de grupos que o usuário faz parte renderizados na tela.
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

/**
 * Pega a quantidade de páginas que o usuário administra.
 * Retira -1 pois o 1 elemento com essa classe é o texto "Páginas que você gerencia"
 */
function getAmountManagedPages(){
    return document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id").length - 1;
}

/**
 * Pega as páginas que o usuário administra.
 * Captura o link e o nome da página.
 * Retorna uma String separando o nome do link pelos caracteres <!!> e as páginas pelos caracteres <$$>.
 */
function getManagedPages(){
    
    // string que armazena todas as páginas administradas
    var pagesList = "";
    
    // passa por todas as páginas retornando suas informações
    var amountPages = getAmountManagedPages();
    
    // inicia em 1 por conta do índice do elemento html
    for (var i = 1; i <= amountPages; i++){
         
        // pega o nome da página
        pagesList += document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id")[i].textContent + "<!!>";
        
        // pega a url da página
        pagesList += document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id")[1].parentElement.href + "<$$>";
     }

     return pagesList;
}
