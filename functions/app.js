// LES FONCTIONS SANS PARAMÈTRE
function hello() {
  console.log("hello world");
}
hello();
// FONCTIONS SANS PARAMÈTRE STOCKÉ DANS UNE VARIABLE
const hello1 = function () {
  console.log("hello world2");
};
hello1();
// UTILISATION IDENTIQUE

//================================

//FONCTIONS SANS PARAMÈTRE AVEC VALEUR DE RETOUR STOCKÉ OU NON STOCKÉ
const getMessage = function getMessage() {
  return console.log("hello gringo");
};
getMessage();

//================================

//FONCTIONS AVEC PARAMÈTRE SANS RETOUR DE VALEUR

function hello2(name) {
  console.log("hello " + name);
}
hello2("gringo2");

//FONCTIONS AVEC PLUSIEURS PARAMÈTRES AVEC RETOUR DE VALEUR

function additions(a, b) {
  return a + b;
}
const resultat = additions(5, 7);
console.log("Le résultat est " + resultat);

//================================

//ASYNC, CALLBACKS, PROMISE

//LE CODE S'AFFICHE À LA SUITE

console.log("Planter du maïs");
console.log("Arroser les plantes");
console.log("Ajouter du fertilisant");

// ASYNC "BONNE APPÉTIT" 3 SECONDES PLUS TARD

console.log("Mettre les ingrédients");

setTimeout(function () {
  console.log("Bonne appétit");
}, 1000);

console.log("Manger les faritas");

//CALLBACKS

//Lorsqu’une fonction accepte simplement une autre fonction comme argument,
// cette fonction contenue est appelée callback.
setTimeout(function () {
  const list = ["chaton, chiot, salamandre"];

  const newList = list.map(function (val) {
    console.log("animal mignon : " + val);
  });
}, 2000);
//console.log(newList);

// CALLBACK NOMMÉE
setTimeout(function () {
  function helloName(name) {
    console.log(`je m'appelle ${name}`);
  }
  function introduction(name, lastName, callback) {
    const completedName = `${name} ${lastName}`;
    callback(completedName);
  }

  introduction("Alexandre", "Grouyou", helloName);
}, 3000);
