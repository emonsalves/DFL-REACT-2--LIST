import Navbar from "../components/Navbar"

function Header({ search, setSearch, arrayDb, btnSearch, setBtnSearch }) {
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        arrayDb={arrayDb}
        btnSearch={btnSearch}
        setBtnSearch={setBtnSearch}
      />
    </>
  )
}

export default Header
