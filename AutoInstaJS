/**
 * Arquivo que contém as funções js a serem realizadas no navegador.
 */


/**
 * Foca no input de inserir o username no login.
 */
function focusOnInputUserLogin() {

    document.querySelectorAll("[name ^= 'username']")[0].focus();
}

/**
 * Foca no input de inserir o passaword no login.
 */
function focusOnInputPasLogin() {
    document.querySelectorAll("[name ^= 'password']")[0].focus();
}

/**
 * Clica no botão de realizar o login.
 */
function clickOnLogin() {
    document.getElementsByClassName('sqdOP  L3NKy   y3zKF')[0].click();
}

/**
 * Captura o username do usuário e retorna-o como uma string.
 */
function getUsername() {
    return window._sharedData.config.viewer.username;
}

/**
 * Clica no botão de seguir o usuário desejado, quando o mesmo não é privado.
 */
function followUserNotPrivate() {
    document.getElementsByClassName("_5f5mN       jIbKX  _6VtSN     yZn4P")[0].click(); 
}

/**
 * Clica no botão de seguir o usuário desejado, quando o usuário é privado.
 */
function followUserPrivate() {
    document.getElementsByClassName("sqdOP  L3NKy   y3zKF")[0].click();
}

/**
 * Clica nos botões de deixar de seguir o usuário.
 */
function unfollowUser() {
    document.getElementsByClassName("_5f5mN    -fzfL     _6VtSN     yZn4P")[0].click();
    document.getElementsByClassName("aOOlW -Cab_")[0].click();
}

/**
 * Clica nos botões de cancelar solicitação de seguir usuário
 */
function cancelFollowRequest() {
    document.getElementsByClassName("sqdOP  L3NKy    _8A5w5")[0].click();
    document.getElementsByClassName("aOOlW -Cab_")[0].click();
}

/**
 * Clica no campo de busca de chat.
 */
function clickOnSearchChat() {
    document.getElementsByClassName('wpO6b ZQScA')[0].click();
}

/**
 * Foca no text-area que pesquisa por um chat.
 */
function focusOnChat() {
        document.getElementsByName("queryBox")[0].focus()
}



/**
 * Inicia o chat com o usuário pesquisado.
 */
function startChat() {

    // clica no primeiro usuário que foi pesquisado
    document.getElementsByClassName('glyphsSpriteCircle__outline__24__grey_2 u-__7')[0].click()

    // clica no botão de Next, para abrir o chat
    document.getElementsByClassName('rIacr')[0].click();
}




/**
 * Foca no textarea de escrever a mensagem do direct.
 */
function focusOnTextMessage() {
    document.getElementsByClassName("Igw0E IwRSH eGOV_ vwCYk ItkAi")[0].focus();
}

/**
 * Clica no botão de curtir o post.
 */
function likePost() {
    document.getElementsByClassName("ltpMr Slqrh")[0].firstElementChild.firstElementChild.click();
}

/**
 * Verifica se o post já foi curtido manualmente pelo usuário.
 */
function isLiked() {
    return document.getElementsByClassName("fr66n")[0].children[0].children[0].outerHTML.includes("Unlike");
}

/**
 * Clica no botão de enviar a mensagem no direct.
 */
function clickOnSendButton() {
    document.getElementsByClassName("Igw0E     IwRSH      eGOV_  vwCYk  ItkAi ")[0].nextElementSibling.children[0].click();
}

/**
 * Foca no text-area de comentário no post.
 */
function focusOnComment() {
    document.getElementsByClassName("Ypffh")[0].focus();
}

/**
 * Clica no botão de enviar comentário.
 */
function clickOnCommentButton() {
    document.getElementsByClassName("RxpZH")[0].lastElementChild.lastElementChild.click()
}

/**
 * Clica no Storie que está na tela, a fim de iniciar sua reprodução.
 */
function clickOnStorie() {
    document.getElementsByClassName("_42FBe")[0].click();
}

/**
 * Foca no text-area que escreve um comentário no Status.
 */
function focusOnCommentStatus() {
    document.getElementsByClassName("Xuckn")[0].focus();
}

/**
 * Clica no botão de enviar o comentário do Status.
 */
function clickOnCommentStatusButton() {
    document.getElementsByClassName("sqdOP yWX7d y1rQx")[0].click();
}

/**
 * Verifica se apareceu a tela de login suspeito.
 */
function checkSuspiciousLogin() {
    if (document.getElementById("choice_1") != null)
        return true;
    else
        return false;
}
