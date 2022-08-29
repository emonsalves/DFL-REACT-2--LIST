import Form from "../components/Form"

function Section({
  arrayDb,
  setArrayDb,
  namePersonal,
  setNamePersonal,
  email,
  setEmail,
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
      />
    </>
  )
}

export default Section
