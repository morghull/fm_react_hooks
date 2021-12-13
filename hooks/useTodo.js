import { useState, useEffect } from 'react';

// логика для работы с заданиями (тасками)
export default function useTodo(initialValue) {
  const [tasks, setTasks] = useState([...initialValue]);

  return {
    tasks,
    setTasks,
    addTask: (values) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    setTaskDone: () => {
      //промапить и вернуть новый, где элемент массива изменил состоние на выполненное
      //не мутировать
    },
    deleteTask: () => {
      //filter
    },
  };
}
