import style from './Button.module.css'; // Importa il file di stile CSS per il componente Button

// Definisce e esporta il componente Button come funzione
export default function Button({ text = 'Leggi di più' }) {
  return (
    <button className={style.button}>{text}</button> // Applica lo stile e visualizza il testo del pulsante
  );
}