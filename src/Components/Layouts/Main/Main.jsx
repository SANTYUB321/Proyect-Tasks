import React, { useContext, useState } from 'react'
import '../Main/Main.css'
import { Filter } from '../../Filter/Filter'
import { Task } from '../../Tasks/Task'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'




export const Main = () => {
  const otherContext = useContext(taskContext)
  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescripcionTask] = useState('')
  const [taskId, settaskId] = useState(1)

const handleTask= ()=>{
  const newTask ={
    title:titleTask,
    description: descriptionTask,
    _id:taskId,
    state:false
  }
  
  let ListTasks =[...otherContext.tasksFilter, newTask]
  otherContext.settaskFilter(ListTasks)
  settaskId(taskId + 1)
}


  
  return (

    <main>
    <div className='inputs'>
        <div className='input'>
        <h5>titulo tarea:</h5>
        <input type="text" onChange={event => setTitleTask(event.target.value)}id='title' />
        </div>
        <div className='input'>
        <h5>Descrpcion Tarea: </h5>
        <input type="text" onChange={event => setDescripcionTask(event.target.value)}id='description' />
        </div>
        <button type="button" onClick={handleTask} >Crear</button>
    </div>
    <div className='recordatorio'>
      <div className='div2'>
        <h2>Usted tiene <p>0</p> tareas completadas y <p>0</p> tareas pendientes</h2>
        </div>
        <hr />
    </div>
    <Filter/>
    <Task>
      {
      otherContext.tasksFilter.map( task =>
      
      <ItemTask title={task.title} id={task._id} description={task.description}></ItemTask>)

    
    }
    </Task>
    </main>
  )
}
