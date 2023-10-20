/*main significa princiapl e mercado converncionou empbora a linguegem, aceiteua,qleur nome
testa se a arquvios maini está reconhecido
escreve aqui abaixo é io mian da class do desafio p resto é por causa da pafgina principal dessa progrma 
documnets detecma a classe
ssocia aclsse a tag
variveis sã nomes prs objetos
Faz funcionar
referente a pasta desafio com o os botões pra digitar o contato doa Alura
apelida os botoões*/
var tecla_um = document.querySelector(".um");
var tecla_dois = document.querySelector(".dois");
var tecla_tres = document.querySelector(".tres");
var tecla_quatro = document.querySelector(".quatro");
var tecla_cinco = document.querySelector(".cinco");
var tecla_seis = document.querySelector(".seis");
var tecla_sete = document.querySelector(".sete");
var tecla_oito = document.querySelector(".oito");
var tecla_nove = document.querySelector(".nove");
var tecla_asterisco = document.querySelector(".asterisco");
var tecla_zero = document.querySelector(".zero");
var tecla_hashtag = document.querySelector(".hashtag");
//variva veis de controle da função configtecladoclass
var tecla = "";
var input = "";
function configteclado(input) {

    //quando um botão for pressionado ele pega o texto que aparece no escreve no campo  e retorna no console  
    tecla = input.value;
    telefone.value = telefone.value + tecla
    return tecla;

    // alert(tecla);
}
/*fim desafio
inicio main principal  Javascript-web-paginas-dinamicas de Alura
retornadnod pro campo de telefone via id 
chefe descuplpe a gambiara de reusar o mesmo arquivo 
 o main é o jacvascript pagina principal por convensão de mercado
requer variveis l input de desafio
requer tecla apelida as teclas
 inicio refeirente a pagina index.html  inicial com botãoes que fazem som*/

//onclick em aruivo externo evento noclick
/*var tecla_pom = document.querySelector('.tecla_pom');*/
var pom_som = document.querySelector('#som_tecla_pom');
//var clap_som = document.querySelector('.tecla_clap');

//tecla_tim
//pegando todaas a s teclas na nossa lista ,const é
const listaDeTeclas=document.querySelectorAll('.tecla');
//evento onclick dos pbotões no clik dos botões
//document.querySelector('.tecla_pom');

//tentaod passar o valor  variviel externa
//evento externo onclick

var sons = "";
//autodetecta id

var sonsid = "";
//document.querySelectorAll('.tecla')
function tocarsom(input) {
    /*adaptado pro onclikc interno
        depepende de configteclado pra fucnionar por reusar varivaveis
        autodetecta id sem preciasar dar o coódigo converte ele em apleido direto*/
    sonsid = "#" + String(input.id)
    sons = document.querySelector(sonsid);
    //input é entrada acima é apelido do botão e retornara o texto aqui é apelido 
    //toca osom pelo id dele 
    sons.play()
    //retorna a url apertado do som 
    tecla = sons.src
    return tecla
}



//aplelido pro codigo do onclick Event =e evento do quando do ingles

//noclick  dosbotão 

/*
tecla_pom.onclick = Pongsom;
//tocarsom(som_tecla_clap)

//som Pongsom manda função tocarsom tocar ao som do Pom/*/
// evento onclick tecla POm
listaDeTeclas[0].onclick=Ponsom;
function Ponsom() {
    input = "";
    tocarsom(som_tecla_pom);

}
//apelido pro evento onclick document.querySelector(apelido).onclick
//evvento onclick
//document.querySelector('.tecla_clap').onclick = clapsom;

//som clapsom manda função tocarsom tocar ao som do Clap
listaDeTeclas[1].onclick=clapsom;
function clapsom() {

    tocarsom(som_tecla_clap);
}
/*
document.querySelector('.tecla_tim').onclick = timsom;
//evento no click

//som timsom manda função tocarsom tocar ao som do Tom*/
listaDeTeclas[2].onclick=timsom;
function timsom() {

    tocarsom(som_tecla_tim);

}
//tecla_puff.onclick = som_puff;  
//não poe entre aspas porque senão vira texto
listaDeTeclas[3].onclick=som_puff;
//som Puffsom manda função tocarsom tocar ao som do Puff
function som_puff() {
    tocarsom(som_tecla_puff);
}
//pleo id ele reconhece sozinho no Javascript
//som somsplash manda função tocarsom tocar ao som do Splash
listaDeTeclas[4].onclick=somsplash;
function somsplash() {
    tocarsom(som_tecla_splash);
}

//tecla_toim.onclick = som_toim;
listaDeTeclas[5].onclick=som_toim;
//som som_toim manda função tocarsom tocar ao som do Toim
function som_toim() {
    tocarsom(som_tecla_toim);
}
//evento no click 
listaDeTeclas[6].onclick=som_psh;
//som som_psh manda função tocarsom tocar ao som do Psh
function som_psh() {
    tocarsom(som_tecla_psh);
}

//tecla_tic.onclick = tecla_som;
listaDeTeclas[7].onclick=tecla_tic;
//som som_tic manda função tocarsom tocar ao som do Tic
function tecla_tic() {
    tocarsom(som_tecla_tic);
}
//id.onclick [e ´o evento no clikc do botão]
//tecla_tom.onclick = somtom;
listaDeTeclas[8].onclick=somtom;
//som som_tic manda função tocarsom tocar ao som do Tic
function somtom() {
    tocarsom(som_tecla_tom);

}
/*
parte pro onclick externo
retorna uma hora atual
correção em 31/10/2021 rHaloween de bug pra domingo
*referencias bibliograficas 
https://developer.mozilla.org/pt-BR/play
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
Lógica%20de%20Programação%20Crie%20seus%20primeiros%20programas%20usando%20Javascript%20e%20HTML%20by%20Paulo%20Silveira,%20Adriano%20Almeida
https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
https://pt.stackoverflow.com/questions/188051/executar-js-em-p%C3%A1gina-de-terceiro
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
Lógica%20de%20Programação%20e%20Algorítmos%20com%20JavaScript%20by%20Edécio%20Fernando%20Iepsen%20
https://developer.chrome.com/docs/extensions/mv3/manifest/#permissions.
https://www.guj.com.br/t/abrir-2-links-ao-mesmo-tempo/301260
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay#:~:text=O%20m%C3%A9todo%20getDay()%20retorna,onde%200%20representa%20o%20Domingo.
https://www.youtube.com/watch?v=iVkSlNNShsk&ab_channel=ProgramadorBR
acinma açlém de dar mesagem amostra data e hora atuais na extensão
abaixo atribui o valor de Pi em ve z daz letras pra substituior letra grega
jogarnsferevalor da testo mas tecla some,abaixo seta o valor do campo
https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions/
https://support.google.com/chrome/a/answer/2714278?hl=pt-BR
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
derivado do modelo https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_concat_string na web
calculador em Javascriop acima
configurando teclado da calculador
isso tlavez será minha exten~soa entçã~n~esse caso naã ofuncioanara console
Desenvolva%20jogos%20com%20HTML5%20Canvas%20e%20JavaScript%20by%20Éderson%20Cássio%20
this é este no inlês
document.getElementById("campo").value=this.value
Lógica de proagramação crie seus primeiros programas usando Javascript E HTML
 document.getElementById
https://getbootstrap.com.br/docs/4.1/components/forms//
Lógica%20de%20Programação%20Crie%20seus%20primeiros%20programas%20usando%20Javascript%20e%20HTML%20by%20Paulo%20Silveira,%20Adriano%20Almeida.pdf
https://odesenvolvedor.com.br/tabela-de-key-codes-para-javascript_1464.html
https://getbootstrap.com.br/docs/4.1/getting-started/javascript/
 fim de desafio aqui é  desafio deixa pro nfinal do arquvio pra disfarçar esse reuso nos slides de apresentação senã oconfieunde o povo
*/