import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { AddTask } from "./components/AddTask"
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Reminder 2',
        day: 'Feb 6th at 4:30pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Reminder 3',
        day: 'Feb 7th at 7:30pm',
        reminder: true
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
                                  onDelete={deleteTask}
                                  onToggle={toggleReminder}/>) : ('No tasks to show')}
      
    </div>
  );
}

export default App;
