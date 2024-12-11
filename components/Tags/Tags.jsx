import style from './Tags.module.css'; // Importa il file di stile CSS per il componente Tags

// Definisce e esporta il componente Tags come funzione
export default function Tags({ className, tags = [] }) {
  // const tagColors = {
  //   html: '#ff0000',
  //   css: '#0000ff',
  //   js: '#ffff00',
  //   php: '#ff00ff'
  // };

  return (
    <ul className={`${style.tags} ${className}`}> {/* Combina le classi tags e className */}
      {tags.map((tag) => (
        // <li style={{ backgroundColor: tagColors[tag] }} className={`${style.tag_item}`} key={tag}>{tag}</li>
        <li className={`${style.tag_item} ${style[tag]}`} key={tag}>{tag}</li> /* Applica le classi tag_item e tag */
      ))}
    </ul>
  );
}