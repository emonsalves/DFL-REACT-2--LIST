import { useState } from "react"
import {DbPersonal} from "./data/data.js"
import  Header  from "./layout/Header"
import  Section  from "./layout/Section"
import  Footer  from "./layout/Footer"
import "./App.css"

function App() {
  const [arrayDb, setArrayDb] = useState([DbPersonal])
  console.log({arrayDb})

  return (
    <div className="App">
            <Header/>
            <Section/>
            <Footer/>
    </div>
  )
}

export default App
