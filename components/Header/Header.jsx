import { classNames } from '../../lib/utilities'; // Importa la funzione classNames dalla libreria utilities
import style from './Header.module.css'; // Importa il file di stile CSS per il componente Header

// Definisce e esporta il componente Header come funzione
export default function Header() {
  return (
    <header className={style.header}> {/* Applica lo stile header */}
      <div className={classNames('container', style.nav_container)}> {/* Combina le classi container e nav_container */}
        <a href="#">Logo</a> {/* Link al logo */}
        
        <nav>
          <ul className={style.menu}> {/* Applica lo stile menu */}
            <li><a href="#">Home</a></li> {/* Link alla pagina Home */}
            <li><a href="#">Pizzas</a></li> {/* Link alla pagina Pizzas */}
            <li><a href="#">Contacts</a></li> {/* Link alla pagina Contacts */}
          </ul>
        </nav>
      </div>
    </header>
  );
}