Campominato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.<br>
**Bonus**<br>
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
## Steps
- Creare la struttra del container, bottone e box su html;
- Dare stili agli elementi;
- Creare una costante per il container e una per il bottone;
- Creo la funzione play per prendere il livello di difficoltà scelto, generare la griglia in base al numero di box e le bombe;
- Creo la funzione per generare i box con la classe definita 'box' in css, e aggiungo anche la classe per dimensionare i box in base al boxNumbers;
- Con un'altra funzione creo la griglia dandogli la classe 'grid' definita in css, poi creo tutti i box e gli aggiungo alla griglia, che a sua volta aggiungo al container;
- Creo una funzione per estrare numeri random e come max avrò il NUM_BOMBS che scelgo io;
- Genero le bombe con una funzione, prima creo un array dentro il quale salvo le bombe 'bombs', poi estraggo numero random da 1 a boxNumbers, se non è presente nell'array lo pusho. Le etraggo in base a NUM_BOMBS e infine restituisco l'array per sapere dove sono posizionate.

