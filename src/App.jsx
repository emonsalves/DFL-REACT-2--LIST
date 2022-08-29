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
  const [search, setSearch] = useState("")
  const [btnSearch, setBtnSearch] = useState(false)

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        arrayDb={arrayDb}
        btnSearch={btnSearch}
        setBtnSearch={setBtnSearch}
      />
      <Section
        arrayDb={arrayDb}
        setArrayDb={setArrayDb}
        namePersonal={namePersonal}
        setNamePersonal={setNamePersonal}
        email={email}
        setEmail={setEmail}
        setBtnSearch={setBtnSearch}
      />
      <Footer
        arrayDb={arrayDb}
        setArrayDb={setArrayDb}
        search={search}
        btnSearch={btnSearch}
        setBtnSearch={setBtnSearch}
      />
    </div>
  )
}

export default App
