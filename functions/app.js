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
  
  //FONCTIONS AVEC PARAMÈTRE
  
  function hello2(name) {
      console.log('hello ' + name);
  };
  hello2('gringo2');
  
  //FONCTIONS AVEC PLUSIEURS PARAMÈTRES
  
  