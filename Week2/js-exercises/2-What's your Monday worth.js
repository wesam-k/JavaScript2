'use strict'

const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30 // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];


  
  const durationTime = mondayTasks.map(task =>{
       const taskMin = task.duration / 60;
      return  taskMin * 25 
  })
 
  let output = durationTime.reduce((total, element)=>  total + parseFloat(element));
    

  console.log(`€ `+ output);