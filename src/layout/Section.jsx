import Form from "../components/Form"

function Section({
  arrayDb,
  setArrayDb,
  namePersonal,
  setNamePersonal,
  email,
  setEmail,
  setBtnSearch
}) {
  return (
    <>
      <Form
        arrayDb={arrayDb}
        setArrayDb={setArrayDb}
        namePersonal={namePersonal}
        setNamePersonal={setNamePersonal}
        email={email}
        setEmail={setEmail}
        setBtnSearch={setBtnSearch}
      />
    </>
  )
}

export default Section
