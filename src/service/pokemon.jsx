export const reqPoke = async(pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await resp.json()
    const {sprites} = data
    const nombre = data.name
    const imagen = sprites.other['home'].front_default
    const shiny = sprites.other['home'].front_shiny

    const datPoke = {
      nombre,
      imagen,
      shiny
    };

    return datPoke
  } catch (err) {
    console.log(err)
  }
}


