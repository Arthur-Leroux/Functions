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
    console.log(`Je suis une fonction ${name}`);
  }
  function introduction(name, lastName, callback) {
    const completedName = `${name} ${lastName}`;
    callback(completedName);
  }

  introduction(
    "callback et j'utilise",
    "setTimeout pour apparaitre ! ",
    helloName
  );
}, 3000);

//================================

// PROMISE

const myDate = function() {
    Date
      .then(function(done) {
        console.log('On a un rendez vous ! Whaouuuu')
        console.log(done)
      })
      .catch(function(error) {
          console.log(error.message)
      })
  }
  console.log(Date);
  myDate();


const date = new Promise((resolve, reject) => {
  const weather = true;
  if (weather) {
    const dateDetails = {
      location: 'le restaurant "la fourchette"',
      time: "14H30",
      table: 5,
    };
    resolve(dateDetails);
  } else {
    reject(new Error("il fera pas beau, donc pas de restaurant"));
  }
});
