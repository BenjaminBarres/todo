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
      text: 'Помыть мусор'
    },
    {
      text: 'Вынести Fortnite'
    },
    {
      text: 'Сделать посуду'
    },
    {
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
