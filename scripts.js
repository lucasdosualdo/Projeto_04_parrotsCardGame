window.onload = numeroCartas;
const arrayGifs =["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot"];
arrayGifs.sort(comparador);
let cartas;
let contTotal = 0;

let cont = 0;
let primeiraCarta;
let segundaCarta;
let dupla = 0;


function comparador() { 
	return Math.random() - 0.5; 
}

function numeroCartas () {
   let numero = prompt("Com quantas cartas você quer jogar?");
   while (numero <4 || numero >14 || numero % 2 ===1) {
      numero = prompt("Por favor, escolha um número par de 4 a 14");
   }
   adicionarCartas(numero);
}


function adicionarCartas(index){
   const arrayCartas = [];
   arrayCartas.sort(comparador);
    cartas = document.querySelector(".container");
    cartas.innerHTML = "";
    
   contTotal += index;
   for(let i = 0; i < index / 2; i++){
       arrayCartas.push(arrayGifs[i]);
       arrayCartas.push(arrayGifs[i]);
   }
   arrayCartas.sort(comparador);
   
   for (let j = 0; j < index; j++){
       cartas.innerHTML += `
       <div class="card" onclick="rotação(this)">
       <div class="front-face face" >
       <img src="images/front.png" />
       </div>
       <div class="back-face face" >
       <img src="images/${arrayCartas[j]}.gif" />
       </div>
       </div>
       `
   }
}

// commit

function reset(primeiraCarta, segundaCarta){
   primeiraCarta.classList.remove("rotacionar");
   segundaCarta.classList.remove("rotacionar");
}

function rotação(elemento){
   

   if (elemento.classList.contains("rotacionar")){
       return; 
   }
   

   
   elemento.classList.add("rotacionar");
   cont++;

   
   if (primeiraCarta === undefined){
       primeiraCarta = elemento;
       return;
   }

   segundaCarta = elemento;

   if (primeiraCarta.innerHTML == segundaCarta.innerHTML){
       dupla++;
   }

  if (primeiraCarta.innerHTML !== segundaCarta.innerHTML){
      setTimeout(reset, 1000, primeiraCarta, segundaCarta);
  }

  primeiraCarta = undefined;
  segundaCarta = undefined;
  venceu();
}


function msgFinal(){
   alert(`Você ganhou em ${cont} jogadas!`);
   clearInterval;
   let resposta = prompt("Você gostaria de reiniciar a partida?");
   if(resposta.toLowerCase() == "sim"){
      cont=0;
      numeroCartas();
   }
   if(resposta.toLowerCase() == "não"){
       alert("Obrigado!");
   }
}
function venceu(){
   if (dupla !== contTotal / 2){
       return;
   }else{
       setTimeout(msgFinal, 1000);
   }
}
