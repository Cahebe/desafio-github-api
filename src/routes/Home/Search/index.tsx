import './styles.css';

export default function Search() {
  return (
    <main >
      <div className="search-main-container">
        <h1>Encontre um perfil Github</h1>
        <input type="form" placeholder='Usuário Github' />
        <button>Encontrar</button>
      </div>
    </main>
  );
}
