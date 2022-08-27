import { useState } from "react"
import { tasksList } from "./ArrayData"

const Tasks = () => {
  const [arrayTasks, setArrayTasks] = useState(tasksList)
  const [nameTask, setNameTask] = useState("")

  const styleInput =
    "m-2 p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const styleButton =
    "py-2.5 px-5 ml-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

  const submitForm = (e) => {
    e.preventDefault(),
      setArrayTasks([...arrayTasks, { name: nameTask, complete: false }]),
      setNameTask("")
  }

  const captureTask = (e) => {
    setNameTask(e.target.value)
  }

  const uploadTask = (task) => {
    const newArrayTasks = [...arrayTasks]
    const index = newArrayTasks.findIndex((ele) => ele.name === task.name)
    newArrayTasks[index].complete = true
    setArrayTasks(newArrayTasks)
  }

  const deleteTask = (task) => {
    const newArrayTasks = [...arrayTasks]
    const filterArray = newArrayTasks.filter((ele) => ele.name !== task.name)
    setArrayTasks(filterArray)
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          className={styleInput}
          type="text"
          placeholder="Insert your Task"
          onChange={captureTask}
          value={nameTask}
        />
        <button className={styleButton}>Add Task</button>
      </form>

      <ul>
        {arrayTasks.map((task) => (
          <li
            className="text-lg font-medium p-1"
            key={task.name}
            style={
              task.complete === true ? { textDecoration: "line-through" } : {}
            }
          >
            {task.name}
            {task.complete === false ? (
              <button onClick={() => uploadTask(task)} className={styleButton}>
                Complete
              </button>
            ) : null}
            <button onClick={() => deleteTask(task)} className={styleButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Tasks
