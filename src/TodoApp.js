
import './todo.css';
import Frame from './components/frame';
import TodoProvider from '../src/context/TodoContext';

function TodoApp() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <main>
        <TodoProvider>
          <Frame />
        </TodoProvider>
        </main>
      </body>
    </div>
  );
}

export default TodoApp;
