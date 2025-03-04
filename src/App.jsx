import './App.css'
import Greeting from './components/Greeting'
import TaskComponent from './components/TaskComponent'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'


function App() {
  const handleAlert = () => {
    alert("Hello from UserInfo!");
  }
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Sally" />
      <UserInfo handleClick={handleAlert}/>
      <TaskComponent />
      <Counter />
      <TaskForm />
    </div>
  );
};

export default App
