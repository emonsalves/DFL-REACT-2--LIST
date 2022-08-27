import { useState } from "react"
import { dbPersonal } from "./data/data.js"
import Header from "./layout/Header"
import Section from "./layout/Section"
import Footer from "./layout/Footer"
import "./App.css"

function App() {
  const [arrayDb, setArrayDb] = useState(dbPersonal)
  const [namePersonal, setNamePersonal] = useState("")
  const [email, setEmail] = useState("")

  // const filterArray = dbPersonal.filter((e)=> e.id !== 2)
  console.log(arrayDb[1])

  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
