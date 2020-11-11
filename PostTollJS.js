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
        pagesList += document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id")[i].parentElement.href + "<$$>";
     }

     return pagesList;
}




/**
* Captura os membros dos usuários dos grupos
*/
infoMember= ""
function GetGroupMembers(qtde){
const intervalo = setInterval(()=>{
      
      tamanhoIndice = document.getElementsByClassName('b20td4e0 muag1w35').length
      usuarios = document.getElementsByClassName('b20td4e0 muag1w35')[tamanhoIndice-1].children //Captura div do usuário
      url = []
      username = []
      for(var user of usuarios)
      {
          url.push(user.children[0].children[0].children[0].children[0].children[0].children[0].getAttribute('href')) 
          username.push(user.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].innerText)  
      }

      if(usuarios.length >= qtde){
          for(var i = 0; i < qtde; i++)
             infoMember += username[i]+'<!!>https://www.facebook.com/'+url[i].split('/')[4] + "<$$>"
          clearInterval(intervalo)
      } 
      else
      {
        //desce a página até pegar a qtde desejada
        window.scroll(0, document.body.scrollHeight)
      }
      
  }, 1)
}

/**
* Retorna o nome do membro e a URL formatada 
*/
function ReturnGroupMembers(){
    return infoMember
}

/**
 * Retorna a url da foto de perfil do usuário.
 */
function getPhotoUrl(){
    
    var url = document.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l oo9gr5id")
    
    if (url.item(url) != null)
       	return url[0].href.replace("&__tn__=%3C", "")
    else
        return ""
}

/**
 * clica no botão para iniciar a publicação
 */
function clickOnPublish(){
    document.getElementsByClassName("_4g34 _195r _5wc_ _55st")[0].click()
}

/**
 * foca no text area para escrever o texto da publicação.
 */
function focusOnTextArea(){
    document.getElementsByClassName("_5whq input composerInput")[0].focus()
}

/**
 * clica no botão para postar a publicação.
 */
function clickOnPost(){
	document.querySelector("#composer-main-view-id").firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.click()	
}
