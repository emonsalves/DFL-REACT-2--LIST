function Colores() {
  const colores = ["red", "green", "pink", "blue"]

  return (
    <ul>
      {colores.map(
        (color) => (console.log(color),
         (<li key={color} style= {{color: color}}>{color}</li>))
      )}
    </ul>
  )
}

export default Colores
