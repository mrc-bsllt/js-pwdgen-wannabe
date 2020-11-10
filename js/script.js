var nome = prompt("Come ti chiami?");
// console.log(nome);

var cognome = prompt("Qual è il tuo cognome?");
// console.log(cognome);

var colore = prompt("Qual è il tuo colore preferito?");
// console.log(colore);

var annoCorrente = 2020;
// console.log(annoCorrente);

var anniStringa = prompt("Quanti anni hai?");
var anniNumero = parseInt(anniStringa);
// console.log(anniNumero);

var numero = annoCorrente - anniNumero;
// console.log(numero);

document.getElementById('name').innerHTML = nome;
document.getElementById('surname').innerHTML = cognome;
document.getElementById('password').innerHTML = nome + cognome + colore + numero;
