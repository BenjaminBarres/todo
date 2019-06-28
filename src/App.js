import React from 'react';
import './App.css';
import { Todos } from './Todos';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import { About } from './About';

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false
    }
  }

  handleClick() {
    this.setState({
      isShowingModal: true
    });
  } 

  handleClose() {
    this.setState({
      isShowingModal: false
    });
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
      <div className="menu">
        <h1>Simple ToDo List.</h1>
        <div className="sep"></div>
        <a href="#">Главная</a>
        <a onClick={this.handleClick.bind(this)}>О программе</a>
      </div>
     <Todos tasks={tasks}></Todos>
     <div className="footer">
      Ruslan Absaliamov &copy;{(new Date()).getFullYear()}
     </div>
  {
    this.state.isShowingModal &&
    <ModalContainer onClose={this.handleClose.bind(this)}>
    <ModalDialog onClose={this.handleClose.bind(this)}>
      <About></About>
    </ModalDialog>
  </ModalContainer>
  }
</div>
);
} 
}

