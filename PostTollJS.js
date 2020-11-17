/**
 * Arquivo que contém as funções js do PostTool a serem realizadas no navegador.
 */

/**
 * Inseri o username e a senha no campo de login.
 */
function insertLogin(username, password){
	document.querySelectorAll("[name ^= 'email']")[0].value = username;
	document.querySelectorAll("[name ^= 'pass']")[0].value = password
}

/**
 * Clica no botão para realizar o login.
 */
function clickOnLogin(){
	document.getElementById("u_0_b").click()	
}

var qtdGroupsDivisions; // armazena quantidade de divisões (groups you managed, other ...) de grupos que existem
var amountGroups; // armazena a quantidade de grupos que o usuário faz parte renderizados na tela

/**
 * Pega a quantidade de grupos que o usuário faz parte renderizados na tela.
 */
function getDisplayedGroups(){

	// pega a quantidade de grupos já renderizados na tela
	amountGroups = document.getElementsByClassName("_7hkf _3-8n _3qn7 _61-3 _2fyi _3qng").length;

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
		groupsList += document.getElementsByClassName("_7hkf _3-8n _3qn7 _61-3 _2fyi _3qng")[i].firstElementChild.children[1].firstElementChild.textContent + "<!!>";

		// pega o id do grupo
		groupsList += document.getElementsByClassName("_7hkf _3-8n _3qn7 _61-3 _2fyi _3qng")[i].parentElement.href.split('/')[4] + "<$$>";
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
    try {
        var url = document.getElementsByClassName('_52jj _42b3')[0].firstElementChild.href
        
        if (url != undefined)
            return url 
        else
            return ""
    }
    catch {
        return ""
    }
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
