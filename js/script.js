// Variabili fisse
var iscritti = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var newclient = prompt("Inserisci il tuo cognome");
var client;
// Sistemo maiuscole e minuscole
var primoCarattere = newclient.charAt(0).toUpperCase(newclient);
var altricaratteri = newclient.slice(1).toLowerCase(newclient);
var clientsurname = primoCarattere + altricaratteri;
// Inserisco i cognomi all'interno della lista
// in ordine alfabetico con sort, che ha a-z come default.
iscritti.push(clientsurname);
iscritti.sort();
// in un ciclo for, per comodità, creo una variabile client
// per gestire ogni singolo elemento del array e la stampo
// su li.
for (var i = 0; i < iscritti.length; i++) {
    client = iscritti[i];
    document.getElementById("clientslist").innerHTML += "<li>" + client + "</li>";
}
