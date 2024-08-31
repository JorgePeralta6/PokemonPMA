export const ContenedorPokemon = ({ datPoke }) => {
  const { nombre, imagen, shiny } = datPoke;

  return (
    <div className="d-flex flex-row justify-content-center align-items-center row row-cols-2 p-2">
      <div className="card me-3" style={{ width: "18rem" }}>
        {imagen && <img src={imagen} className="card-img-top" alt={`${nombre} sprite`} />}
      </div>
      <div className="card" style={{ width: "18rem" }}>
        {shiny && <img src={shiny} className="card-img-top" alt={`${nombre} sprite`} />}
      </div>
    </div>
  )
}


