import React from 'react';
import './App.css';
import { Todos } from './Todos';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
 render() {
  const tasks = [
    {  
      id: 1,
      text: 'Помыть мусор'
    },
    { 
      id: 2,
      text: 'Вынести Fortnite'
    },
    { 
      id: 3,
      text: 'Сделать посуду'
    },
    { 
      id: 4,
      text: 'Поиграть в уроки'
    },
  ]

  return (
    <div>
     <Todos tasks={tasks}></Todos>
    </div>
  );
 }
}

export default App;
