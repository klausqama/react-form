import Button from '../Button/Button'; // Importa il componente Button
import style from './PostCard.module.css'; // Importa il file di stile CSS per il componente PostCard
import placeholder from '../../src/assets/placeholder.webp'; // Importa l'immagine placeholder
import Tags from '../Tags/Tags'; // Importa il componente Tags
import TrashIcon from '../ui/trash-icon'; // Importa l'icona TrashIcon

// Definisce e esporta il componente PostCard come funzione
export default function PostCard({ onDelete = () => {}, post = {} }) {
  // Destruttura le proprietà del post
  const { 
    title,
    image,
    content,
    tags,
    // published 
  } = post;

  // console.log(id, title, image, tags, content, published); // Stampa le proprietà del post nella console (commentato)

  // function callback () {
  //   console.log('elimina questo post'); // Funzione di callback per eliminare il post (commentato)
  // }

  return (
    <div className={style.card}> {/* Applica lo stile card */}
      <img className={style.image} src={image || placeholder} alt="" /> {/* Mostra l'immagine del post o il placeholder */}
      <div className={style.card_body}> {/* Applica lo stile card_body */}
        <h3 className={style.card_title}>{title}</h3> {/* Mostra il titolo del post */}
        <Tags tags={tags} /> {/* Mostra i tag del post */}
        <p className={style.card_description}>{content}</p> {/* Mostra il contenuto del post */}
        <div className={style.card_footer}> {/* Applica lo stile card_footer */}
          <Button /> {/* Mostra il bottone */}
          <button onClick={onDelete} className={style.icon}> {/* Bottone per eliminare il post */}
            <TrashIcon /> {/* Mostra l'icona del cestino */}
          </button>
        </div>
      </div>
    </div>
  );
}