import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import { Counter } from './Components/Counter';
import { Todoinput } from './Components/Todosinput';
import { TodoList } from './Components/TodoList';
function App() {

  return (
    <div className="App">
      {/* <Counter />
      <br /> */}
      <Todoinput />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
