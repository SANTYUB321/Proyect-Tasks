import React, {useContext, useState } from 'react'
import '../ItemTask/ItemTask.css'
import { taskContext } from '../Context/Context';




export const ItemTask = ({title,description, id}) => {
  const secondContext = useContext(taskContext);
  const [IsActive, setIsActive] = useState(false);

 const statesCheckbox =()=>{
   setIsActive(!IsActive)
  const abc = secondContext.tasksFilter.map(tas=>{
  
      if (tas._id == id) {

        return { ...tas, state: true }; 
      } else {
        return { ...tas  }; 
      }

  })
console.log(abc);
 }


  return (
    <div className='item'>
      
    <li  className={ IsActive? `LiActive` : ` LiIdle` } id=''>
      <div className={ IsActive? `active` : ` idle` }/>
      <span>{title}</span>
    <span>{description}</span>
    </li>
    <input type="checkbox"  onChange={statesCheckbox} className='checkbox'/>
  
    </div>
  )
}
