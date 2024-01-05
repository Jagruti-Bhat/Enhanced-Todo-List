import React, { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ tasks, setTasks }) => {
  
  const [newTask, setNewTask] = useState('');
  //const [undoTask,setundoTask] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="text-center mt-4">
      <div>
        <input
          className='shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text"
          value={newTask}
          placeholder='Add new task'
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br />
        <button className='bg-deepblue hover:bg-[blue] text-white font-bold py-2 px-4 rounded mt-2'
        onClick={addTask}>
          Add Task
        </button>
      </div>
      
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleCompletion={() => toggleCompletion(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;


