import { useState } from "react"

const Tasks = () => {
  const tasksList = ["Task 1", "Task 2", "Task 3"]
  const [arrayTasks, setArrayTasks] = useState(...[tasksList])
  const [nameTask, setNameTask] = useState("")

  const styleInput =
    "p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const styleButton =
    "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

  const submitForm = (e) => {
    e.preventDefault(),
      console.log("Form Send"),
      setArrayTasks([...arrayTasks, nameTask]),
      setNameTask("")
    console.table(arrayTasks)
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          className={styleInput}
          type="text"
          placeholder="Insert your Task"
          onChange={(e) => setNameTask(e.target.value)}
          value={nameTask}
        />
        <button className={styleButton}>Add Task</button>
      </form>

      <ul>
        {arrayTasks.map((task) => (
          <li key={task}> {task}</li>
        ))}
      </ul>
    </>
  )
}

export default Tasks
