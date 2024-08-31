import { useState } from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {
    const [pokemon, setPokemon] = useState('')
  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" action="" onSubmit={(e)=>{handleGetPokemon(pokemon,e)}}>
          <input type="text" className="form-control me-2" placeholder="Encontrar a tu pokemon" onChange={(e)=>{setPokemon(e.target.value)}} />
          <input type="submit" value="Buscar Pokemon (en minuscula)" className="btn btn-info" />
        </form>
      </div>
    </>
  )
}


