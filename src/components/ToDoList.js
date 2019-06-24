import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
    const {tasks, removeTask, statusHandler, showMode, updateTasks} = props,
        tasksToShow = showMode === 'all' ? tasks : tasks.filter(task => task.status.toLowerCase() === showMode);


    const editTask = (task, id) => {
        // updateTasks
    }

    return(
        <ul className="todo-list">
            {tasksToShow.map((task, idx) => (

                <ToDoItem 
                    task={task} 
                    key={`${idx}${task.text}`}
                    taskId={task.id}
                    removeTask={removeTask}
                    statusHandler={statusHandler}
                    editTask={editTask}
                />
            ))}
        </ul>
    );
};

export default ToDoList;