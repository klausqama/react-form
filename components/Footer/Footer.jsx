import { classNames } from '../../lib/utilities'; // Importa la funzione classNames dalla libreria utilities
import style from './Footer.module.css'; // Importa il file di stile CSS per il componente Footer

// Definisce e esporta il componente Footer come funzione
export default function Footer() {
  return (
    <footer className={style.footer}> {/* Applica lo stile footer */}
      <div className={classNames('container', style.container)}> {/* Combina le classi container e container */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate debitis fugiat vel odit, minima, aliquam voluptas officia, modi voluptatum esse ratione ad necessitatibus rem! Voluptate ipsam nostrum consequuntur quibusdam.
      </div>
    </footer>
  );
}