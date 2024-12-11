import PostCard from '../PostCard/PostCard'; // Importa il componente PostCard
import style from './Main.module.css'; // Importa il file di stile CSS per il componente Main
import { posts } from './.././../src/posts.js'; // Importa i dati dei post
import Tags from '../Tags/Tags.jsx'; // Importa il componente Tags
import { useState } from 'react'; // Importa il hook useState da React
import Button from '../Button/Button.jsx'; // Importa il componente Button

// Definisce e esporta il componente Main come funzione
export default function Main() {
  // Stato per i post pubblicati
  const [publishedPosts, setPublishedPosts] = useState(posts.filter((post) => post.published === true));
  const tags = []; // Array per memorizzare i tag unici

  // Itera su ogni post per estrarre i tag
  posts.forEach(post => {
    const postTags = post.tags; // Estrae i tag del post
    console.log(postTags); // Stampa i tag del post nella console

    // Itera su ogni tag del post
    postTags.forEach((tag) => {
      if (!tags.includes(tag)) { // Se il tag non è già presente nell'array tags
        tags.push(tag); // Aggiunge il tag all'array tags
      }
      // !tags.includes(tag) && tags.push(tag) // Alternativa per aggiungere il tag se non presente
    });
  });

  const [title, setTitle] = useState(''); // Stato per il titolo del nuovo post

  // Funzione per aggiungere un nuovo post
  function addPost(e) {
    e.preventDefault(); // Previene il comportamento predefinito del form

    const newTitle = title.trim(); // Rimuove gli spazi bianchi dal titolo
    if (newTitle === '') return; // Se il titolo è vuoto, esce dalla funzione

    const post = {
      id: Date.now(), // Genera un ID unico per il post
      title,
      image: undefined, // Campo immagine da compilare
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.', // Contenuto del post
      tags: [], // Array vuoto per i tag
      published: true, // Imposta il post come pubblicato
    };

    setPublishedPosts([...publishedPosts, post]); // Aggiunge il nuovo post all'array dei post pubblicati
    setTitle(''); // Resetta il titolo del nuovo post
  }

  // Funzione per eliminare un post
  function deletePost(id) {
    setPublishedPosts(publishedPosts.filter(post => post.id !== id)); // Filtra i post per rimuovere quello con l'ID specificato
  }

  // console.log('tags', tags); // Stampa i tag nella console (commentato)

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form onSubmit={addPost} action="" className='inline-form'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Titolo del post' /> {/* Campo di input per il titolo del post */}
            <Button text='Salva' /> {/* Bottone per salvare il post */}
          </form>
        </div>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1> {/* Titolo della sezione */}
        </div>
        <div className="container">
          <Tags className={style.tags_centered} tags={tags} /> {/* Componente per visualizzare i tag */}
        </div>
        <div className="container">
          <div className="row">
            {publishedPosts.map((el) => (
              <div key={el.id} className="col-4">
                <PostCard onDelete={() => deletePost(el.id)} post={el} /> {/* Componente per visualizzare il post con funzione di eliminazione */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}