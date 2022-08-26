const Tasks = () => {
  const tasksList = ["Tarea 1", "Tarea 2", "Tarea 3"]

  return (
    <ul>
      {tasksList.map((task) => (
        <li key={task}> {task}</li>
      ))}
      
    </ul>
    
    
  )
}

export default Tasks
