window.onload = numeroCartas;
const arrayGifs =["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot"]
arrayGifs.sort(comparador);
let cartas;
let contTotal = 0;


function comparador() { 
	return Math.random() - 0.5; 
}

function numeroCartas () {
   let numero = prompt("Com quantas cartas você quer jogar?");
   numero = Number(numero);
   while (numero <4 || numero >14 || numero % 2 ===1) {
      alert("Por favor, escolha um número par de 4 a 14")
      numero = prompt("Com quantas cartas você quer jogar?");
   }
   adicionarCartas(numero);
}


function adicionarCartas(index){
   const arrayCartas = [];
   arrayCartas.sort(comparador);
    cartas = document.querySelector(".container");
    cartas.innerHTML = ""
    
   contTotal += index
   for(let i = 0; i < index / 2; i++){
       arrayCartas.push(arrayGifs[i]);
       arrayCartas.push(arrayGifs[i]);
   }
   arrayCartas.sort(comparador);
   
   for (let j = 0; j < index; j++){
       cartas.innerHTML += `
       <div class="card">
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
