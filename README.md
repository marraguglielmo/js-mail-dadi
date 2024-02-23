# Mail Dadi

MAIL <br>
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

GIOCO DEI DADI <br>
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## SVOLGIMENTO

**Mail** <br>

1. inizializzo un array con l'elenco delle email autorizzate
2. prompt email utente
3. verifico che l'email dell'utente corrisponda ad uno degli elementi dell'array
4. se corrisponde consento l'accesso e stampo l'esito positivo in pagina, altrimenti stampo un messaggio di errore

**Gioco dei Dadi** <br>

1. creo due array(uno per il giocatore e uno per il pc), con dentro 6 numeri da 1 a 6
2. estraggo un numero casuale da entrambi gli array
3. confronto i numeri estratti e stabilisco il vincitore in base al numero più alto
