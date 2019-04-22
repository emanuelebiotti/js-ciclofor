//crea una lista di chi può accedere
 var email = ['ciccio@email.com', 'pasticcio@email.com', 'gigetto@email.com'];

//chiedi all'utente la sua email

var tuamail = prompt('Qual è la tua email?');

// verifica che la mail inserita dall'utente sia nella lista

for (var i = 0; i < email.length; i++) {

  if (tuamail == email[i]) {

    document.writeln('benvenuto');

  }

  // else {
  //
  //   document.writeln('utente non riconosciuto');
  // }

}

//stampa un messaggio di risposta

// ok il ciclo for, ma nella condizione "else" mi stampa 3 messaggi anziché uno solo - devo capire perché
