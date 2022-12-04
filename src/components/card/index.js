import './style.css';

function Card(props) {
  return (
    <article>
      <div className='box'>
        <h2 className='titleCard'>{props.title}</h2>
        <img src={props.src} alt={props.alt}/>
        <button className='buttonCard' href={props.link}>Saiba mais</button>
      </div>
    </article>
  );
}

export default Card;