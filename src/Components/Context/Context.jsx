import React from 'react'
import {createContext, useState} from "react"



export const taskContext = createContext()

export const TaskProvider = ({children}) => {

    // const [tasks, setTasks] = useState([]);
      const [tasksFilter, settaskFilter] = useState([])

  console.log([tasksFilter]);
  return (
    <taskContext.Provider value={{tasksFilter, settaskFilter}}>
        {children}
    </taskContext.Provider>
  )
}
