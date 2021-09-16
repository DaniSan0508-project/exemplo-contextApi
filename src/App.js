
import './App.css';
import Alunos from './components/Alunos';
import UserProvider from './context/user';

function App() {
 
  return (
    <UserProvider>
      <Alunos/>
    </UserProvider>
  );
}

export default App;
