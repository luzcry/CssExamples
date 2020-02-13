//Metodos para seleccionar elementos del DOM (nodos tipo 1)
//getElementById
let title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

//getElementsByTagName
//devuelve todos los elementos que cumplan con la etiqueta (en este caso a) en una lista

let linkslist = document.getElementsByTagName("a");
console.log(linkslist);
//si queremos acceder al primer enlace
console.log(linkslist[0]);
console.log(linkslist[0].firstChild);

//getElementsByClassName

let itemsList = document.getElementsByClassName("item");
console.log(itemsList);
//acceder al último elemento li
console.log(itemsList[3]);
//acceder a etiqueta A
console.log(itemsList[3].firstElementChild);
//acceder a noticias (nodo tipo texto)
//firstChild nos permite hacer el recorrido a un nodo diferente a los elementos
console.log(itemsList[3].firstElementChild.firstChild);

/*querySelector 

let title = document.querySelector("#title")
console.log(title);
acceder al texto
console.log(title.firstChild);

var navbar = document.querySelector("#navbar")
console.log(navbar);

acceder al primer elemento que cumple con la clase con querySelector
let item = document.querySelector(".item");
console.log(item);

con querySelectorAll se trae a todos los elementos que cumplan con la clase 

let listItem = document.querySelectorAll(".item");
console.log(listItem);
*/

