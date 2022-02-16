import { Typography } from 'antd';
import './App.css';
import Filters from './components/Filters/Filters';
import TodoList from './components/TodoList/TodoList';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title level={1} style={{textAlign: 'center'}}>TODO APP with REDUX</Title>
      <Filters/>
      <TodoList/>
    </div>
  );
}

export default App;
