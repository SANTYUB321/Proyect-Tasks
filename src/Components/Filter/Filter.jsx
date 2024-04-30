
import React, { useContext } from 'react'
import '../Filter/Filter.css'
import { taskContext } from '../Context/Context'


export const Filter = () => {

  const context = useContext (taskContext);
// const resultfilter1 = [context.tasksFilter.filter(task => !task.status)];
// const resultfilter2 = [context.tasksFilter.filter(task => task.status)];

const handleFilters = (event) => {
  let currentOption = event.target.value
  console.log(currentOption);
 
  if (currentOption === 'Earrings'){
     context.setTasks(context.tasksFilter.filter(tasks=> !tasks.state))
  }
  else if (currentOption === 'Solved'){
 context.setTasks(context.tasksFilter.filter(tasks=> tasks.state))
  }
  else{ 
    context.setTasks(context.tasksFilter)
  }
}

  return (
    <div className='filter'>
    <h2>Filtrar:</h2>
    <select name="Tareas" id="select" onChange={handleFilters}>
        <option value="all">Todas Las Tareas</option>
        <option value="Earrings">Pendientes</option>
        <option value="Solved">Resueltas</option>
    </select>
    </div>
  )
}
