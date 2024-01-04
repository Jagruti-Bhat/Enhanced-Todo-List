import React from 'react';

const TodoItem = ({ task, onToggleCompletion }) => {
  const completedStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed ? 'gray' : 'inherit'
  };

  return (
    <div className="mx-auto my-4 max-w-md text-left mt-4 shadow appearance-none rounded leading-tight flex items-center justify-between p-4">
      <span style={completedStyle}>
        {task.text}
      </span>
      <div>
        <button className='text-deepblue'
                onClick={onToggleCompletion}
                style={task.completed ? { color: 'gray' } : {}}>
          {task.completed ? 'Completed' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;