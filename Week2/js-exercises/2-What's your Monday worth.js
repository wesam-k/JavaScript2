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
  const rate  =25;
  
  function mondayWorth(){
    const durationTime = mondayTasks.map(task =>task.duration *rate / 60);
     const output = durationTime.reduce((total, num)=>  total + parseFloat(num));
    return `€${output}`
  }
 console.log(mondayWorth());

 // please can you tell me why is the wrong here 