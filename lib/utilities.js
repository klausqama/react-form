// Esporta la funzione classNames che accetta un numero variabile di argomenti
export function classNames(...classes) {
	console.log(classes); // Stampa l'array di classi nella console
	return classes.join(' '); // Unisce le classi in una singola stringa separata da spazi
  }
