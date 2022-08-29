import Navbar from "../components/Navbar"

function Header({ search, setSearch, arrayDb}) {
  return (
    <>
      <Navbar search={search} setSearch={setSearch} arrayDb={arrayDb} />
    </>
  )
}

export default Header
