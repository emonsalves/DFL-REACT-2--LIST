function Footer({ arrayDb, setArrayDb }) {
  return (
    <>
    <h1 className="mt-3 text-xl">Listado del Personal</h1>
      <ul className="mt-3">
        {arrayDb.map((slot) => (
          <li className="mt-1" key={slot.nombre}>{slot.id} - {slot.nombre} - {slot.correo}</li>
        ))}
      </ul>
    </>
  )
}
export default Footer
