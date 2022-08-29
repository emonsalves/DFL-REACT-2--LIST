import React from "react"

function Form({
  arrayDb,
  setArrayDb,
  namePersonal,
  setNamePersonal,
  email,
  setEmail,
}) {
  const submitForm = (e) => {
    e.preventDefault()
    checkName() === true && checkEmail() === true
      ? alert("Campos vacios favor de ingresar su nombre y email")
      : setArrayDb([
          ...arrayDb,
          { id: arrayDb.length + 1, name: namePersonal, mail: email },
        ]),
      setNamePersonal(""),
      setEmail("")
  }

  const captureNamePersonal = (e) => {
    setNamePersonal(e.target.value)
  }

  const captureEmail = (e) => {
    setEmail(e.target.value)
  }

  const checkName = () => {
    let check = false
    namePersonal === "" ? (check = true) : (check = false)
    return check
  }

  const checkEmail = () => {
    let check = false
    email === "" ? (check = true) : (check = false)
    return check
  }

  return (
    <form onSubmit={submitForm}>
      <div className="mb-6">
        <label
          htmlFor="input"
          className="block mb-2 mt-6 text-sm font-medium text-gray-900"
        >
          Nombre de la persona
        </label>
        <input
          onChange={captureNamePersonal}
          type="text"
          id="input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese nombre"
          required=""
          value={namePersonal}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Correo de la persona
        </label>
        <input
          onChange={captureEmail}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingrese email"
          required=""
          value={email}
        />
      </div>

      <button
        type="submit"
        className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Agregar Personal
      </button>
    </form>
  )
}

export default Form
