import React, { useState, useEffect } from 'react';
import { TodoList, Greeting } from "./components";

const App = () => {
  const [dynamicMessage, setDynamicMessage] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    updateGreeting();
  }, [tasks]);

  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 4 && currentHour < 12) {
      greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    
    const allDone = tasks.every(task => task.completed) && tasks.length > 0;

    const remainingTasks = tasks.filter(task => !task.completed).length;

    if (tasks.length === 0) {
      setDynamicMessage(`${greeting} Let's get some tasks done!`);
    } else if (!allDone) {
      if (remainingTasks === 1) {
        setDynamicMessage(`${greeting} Almost there, only one task left!`);
      } else {
        setDynamicMessage(`${greeting} You're making great progress! ${remainingTasks} tasks to go.`);
        const taskMessage = remainingTasks > 3
      ? "Keep going, you can do this!"
      : `Hey there, you're on your way! ${remainingTasks} tasks to go.`;
    setDynamicMessage(`${greeting} ${taskMessage}`);
      }
    } else if (allDone) {
      setDynamicMessage(`${greeting} All done for today! Enjoy your time.`);
      setTimeout(() => {
        setDynamicMessage(
           'Wow, you crushed it! Take a well-deserved break or set a new goal!'
        );
      }, 2000);
    }
  };

  return (
    <div>
      <Greeting message={dynamicMessage} />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;